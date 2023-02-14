package doan;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.Scanner;
import java.lang.Math;

public class Sql {
	// chuc nang 1 san pham cua cua tiem
		public void XemSp() {
			try {
				Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
				CallableStatement stmt=conn.prepareCall("{call Sanpham()}");
				stmt.execute();
				ResultSet rs=stmt.executeQuery();
				while(rs.next()) {
					System.out.print("Ma hang hoa: "+rs.getString("mahang"));
					System.out.println("\tTen hang hoa: "+rs.getString("tenhang"));
				}
			}
			catch(SQLException e) {
				System.out.println("Loi "+ e.getMessage());
			}
		}
	
	
	// cua chuc nang 2
	public double dongia(String mahang) {
		double dg=0.0;
		try {
		
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call DG(?,?)}");
			stmt.setString(1,mahang);
			stmt.registerOutParameter(2,Types.DOUBLE);
			ResultSet rs=stmt.executeQuery();
			dg=stmt.getDouble(2);
			stmt.executeQuery();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return dg;
	}
// kiem tra khach hang 
	public String ktKH(String ma) {
		String t=new String();
		try {
		
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call MaKH(?,?)}");
			stmt.setString(1, ma);
			stmt.registerOutParameter(2,Types.CHAR);
			ResultSet rs=stmt.executeQuery();
			t=stmt.getString(2);
			stmt.executeQuery();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return t;
	}
	
// cap nhat diem thuong
	public void updateDT(String ma,int diem) {
		try {
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call updateDiem(?,?)}");
			stmt.setString(1, ma);
			stmt.setInt(2, diem);
			stmt.execute();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
	}
	
// tra ve diem thuong
	public int Diem(String ma) {
		int t=0;
		try {
		
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call Diem(?,?)}");
			stmt.setString(1, ma);
			stmt.registerOutParameter(2,Types.INTEGER);
			ResultSet rs=stmt.executeQuery();
			t=stmt.getInt(2);
			stmt.executeQuery();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return t;
	}
	
// truy xuat hoa don
	
	public double truyxuatHD(String makhach,String ngaylap) {
		double tongtien=0.0;
		try {
			double temp=0;
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call truyxuatHD(?,?)}");
			stmt.setString(1,makhach);
			stmt.setString(2, ngaylap);
			stmt.execute();
			ResultSet rs=stmt.executeQuery();
			while(rs.next()) {
				System.out.println("Ten hang hoa: "+rs.getString("tenhang")+"\tSo luong: "+rs.getInt("slmua")+"\tDon gia: "+rs.getDouble("dgban")+"\tGia: "+rs.getDouble("thanhtien"));
				temp=temp+rs.getDouble("thanhtien");
			}
			tongtien=temp-temp*Diem(makhach)*0.02; // moi diem ddc giam 2%
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return tongtien;
	}
// cap nhat so luong san pham
	public void updateSL(String mahang,int sl) {
		try {
			double temp=0;
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call updateSL(?,?)}");
			stmt.setString(1,mahang);
			stmt.setInt(2, sl);
			stmt.execute();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
	}
// tao ma so hoa don
	public String maHD() {
		String mahd=new String();
		try {
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			Statement stmt=conn.createStatement();
			ResultSet rs=stmt.executeQuery("select count(*)as slHD from hoadon");
			
			while(rs.next()) {
					mahd=("HD"+(rs.getInt("slHD")+1));
			}
			
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return mahd;
	}
	
// hoa don thanh toan (chuc nang 2)
	public void nhapBill() {
		Scanner sc=new Scanner(System.in);
		System.out.println("Ma khach hang: "); String makh=sc.nextLine();
		 if(ktKH(makh)==null){
			System.out.println("Ten khach hang: "); String tenkh=sc.nextLine();
			System.out.println("So dien thoai: "); String sdt=sc.nextLine();
				// insert vao table khach hang
			try {
				Connection connn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
				CallableStatement stmt=connn.prepareCall("{call nhapKH(?,?,?,?)}");
				stmt.setString(1,makh);
				stmt.setString(2, tenkh);
				stmt.setString(3, sdt);
				stmt.setInt(4, 0);
				stmt.execute();
				//System.out.println("KH thanh cong");
				
			}
			catch(SQLException e) {
				System.out.println("Loi "+ e.getMessage());
			}
		}
		 
		else {	
			System.out.println("Khach hang quen:");
			if(Diem(makh)<5)
			updateDT(makh,1);
		}
		System.out.println("Ngay lap hoa don(nam-thang-ngay): "); String ngaylap=sc.nextLine();
		System.out.println("So luong san pham can thanh toan: "); int tongsl=sc.nextInt(); sc.nextLine();
		for(int i=0;i<tongsl;i++){
			System.out.println("Ma so hang hoa: "); String mahang=sc.nextLine();
			System.out.println("So luong: "); int sl=sc.nextInt(); sc.nextLine();
			double dg=dongia(mahang),T=sl*dg,thanhtien=T;
			// insert vao table hoa don
			try {
				Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
				CallableStatement stmt=conn.prepareCall("{call nhapHD(?,?,?,?,?,?)}");
				stmt.setString(1, maHD());
				stmt.setString(2,makh);
				stmt.setString(3, mahang);
				stmt.setString(4, ngaylap);
				stmt.setInt(5,sl);
				stmt.setDouble(6, thanhtien);
				stmt.execute();
				updateSL(mahang,sl);//
				
				
			}
			catch(SQLException e) {
//				System.out.println("Loi "+ e.getMessage());
			}
		}
		// hien thi
		 double tongtien=truyxuatHD(makh,ngaylap);
		 System.out.println("\nHOA DON THANH TOAN TAI CUA HANG THANH HIEU TOAN\n");
		 System.out.println("Tong cong: "+tongtien);
		 System.out.println("So tien khach dua: "); double tien=sc.nextDouble();
		 System.out.println("So tien tra lai: "+(tien-tongtien));
	}
	
// chuc nang 3 nhap hang vao kho
	// nhap dai ly phan phoi
	public String ktmadaily(String ma) {
		String t=new String();
		try {
		
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call maDL(?,?)}");
			stmt.setString(1, ma);
			stmt.registerOutParameter(2,Types.CHAR);
			ResultSet rs=stmt.executeQuery();
			t=stmt.getString(2);
			stmt.executeQuery();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return t;
	}
	//
	public void nhapDaiLy(String ma) {
		Scanner sc=new Scanner(System.in);
		if(ktmadaily(ma)==null) {
			System.out.println("Nhap ten dai ly: "); String tendl=sc.nextLine();
			System.out.println("Nhap dia chi dai ly: "); String diachi=sc.nextLine();
			try {
				Connection connn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
				CallableStatement stmtt=connn.prepareCall("{call nhapDL(?,?,?)}");
				stmtt.setString(1, ma);
				stmtt.setString(2,tendl);
				stmtt.setString(3, diachi);
				stmtt.execute();
				
			}
			catch(SQLException e) {
				System.out.println("Loi "+ e.getMessage());
			}
			
		}
	}
	
	// ma hang hoa
	public String ktmahang(String ma) {
		String t=new String();
		try {
		
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call MaHH(?,?)}");
			stmt.setString(1, ma);
			stmt.registerOutParameter(2,Types.CHAR);
			ResultSet rs=stmt.executeQuery();
			t=stmt.getString(2);
			stmt.executeQuery();
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
		return t;
	}
	// nhap hang
	public void nhaphang() {
		Scanner sc=new Scanner(System.in);
		int n=1;
		while(n==1) {
			System.out.println("Nhap dai ly phan phoi: ");
			System.out.println("Ma Dai ly phan phoi: "); String madl=sc.nextLine();
			nhapDaiLy(madl);
			System.out.println("Nhap thong tin hang hoa");
			System.out.println("Ma hang hoa: "); String mahang=sc.nextLine();
			if(ktmahang(mahang)==null) {
				System.out.println("Hang hoa chua co trong kho\n");
				System.out.println("Nhap ten hang hoa: "); String tenhang=sc.nextLine();
				System.out.println("Nhap so luong hang hoa: "); int sl=sc.nextInt(); sc.nextLine();
				System.out.println("Ngay nhap hang hoa (nam-thang-ngay) : "); String ngaynhap=sc.nextLine();
				System.out.println("Don gia nhap san pham: "); double dongianhap=sc.nextDouble(); sc.nextLine();
				try {
					Connection connn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmtt=connn.prepareCall("{call nhaphang(?,?,?,?,?,?)}");
					stmtt.setString(1, mahang);
					stmtt.setString(2, tenhang);
					stmtt.setString(3,madl);
					stmtt.setInt(4, sl);
					stmtt.setString(5, ngaynhap);
					stmtt.setDouble(6,dongianhap);
					stmtt.execute();
					System.out.println("Het hang bam(0), Con hang bam(1): "); n=sc.nextInt(); sc.nextLine();
					
				}
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}
			// san pham da co trong kho
			else {
				System.out.println("San pham da co trong kho:\n");
				System.out.println("So luong san pham nhap vao"); int sl=sc.nextInt();
				try {
					Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmt=conn.prepareCall("{call updateSLnhap(?,?)}");
					stmt.setString(1, mahang);
					stmt.setInt(2,sl);
					stmt.execute();
					
					System.out.println("Het hang bam(0), con hang bam(1): "); n=sc.nextInt(); sc.nextLine();
				}
				
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}
		}
		System.out.println("Da them hang vao kho: ");
		
	}
	
	// kiem tra so luong hang hoa (chuc nang 4)
		public void KTsoluong() {
			try {
				Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
				CallableStatement stmt=conn.prepareCall("{call soluong()}");
				stmt.execute();
				ResultSet rs=stmt.executeQuery();
				while(rs.next()) {
					if(rs.getInt("sl")==0) 
						System.out.println("San pham da het");
					else
						System.out.print("Ten mat hang: "+rs.getString("tenhang"));
						System.out.println("\t\tSan pham con lai so luong la: "+ rs.getInt("sl"));
				}
			}
			catch(SQLException e) {
				System.out.println("Loi "+ e.getMessage());
			}
		}
	
	//chuc nang 5 thong ke doang thu thang
	public void DTMonth() {
		Scanner sc=new Scanner(System.in);
		System.out.println("Nhap thang can thong ke: "); int thang=sc.nextInt();
		try {
			
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call doanhthuM(?,?)}");
			stmt.setInt(1, thang);
			stmt.registerOutParameter(2,Types.DOUBLE);
			ResultSet rs=stmt.executeQuery();
			double t=stmt.getDouble(2);
			stmt.executeQuery();
			System.out.println("Doanh thu thang "+thang+"= "+t);
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
	}
	
	// chuc nang 6 thong ke doanh thu ngay
	public void DTDay() {
		Scanner sc=new Scanner(System.in);
		System.out.println("Nhap ngay can thong ke: "); int ngay=sc.nextInt();
		try {
			
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call doanhthuD(?,?)}");
			stmt.setInt(1, ngay);
			stmt.registerOutParameter(2,Types.DOUBLE);
			ResultSet rs=stmt.executeQuery();
			double t=stmt.getDouble(2);
			stmt.executeQuery();
			System.out.println("Doanh thu thang "+ngay+"= "+t);
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
	}
	
	//chuc nang 7 kiem tra xuat xu
	public void xuatxu() {
		Scanner sc=new Scanner(System.in);
		System.out.println("Nhap ma hang can kiem tra: "); String mahang=sc.nextLine();
		try {
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
			CallableStatement stmt=conn.prepareCall("{call xuatxu(?)}");
			stmt.setString(1, mahang);
			stmt.execute();
			ResultSet rs=stmt.executeQuery();
			while(rs.next()) {
				System.out.println("Xuat xu tai dai ly: "+rs.getString("tendl"));
			}
			
		}
		catch(SQLException e) {
			System.out.println("Loi "+ e.getMessage());
		}
	}
	
	//kiem tra so luong hang hoa (chuc nang 8)
			public void KTsoluongCuThe(String mahang) {
				try {
					Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmt=conn.prepareCall("{call soluongMH(?)}");
					stmt.setString(1,mahang);
					stmt.execute();
					ResultSet rs=stmt.executeQuery();
					while(rs.next()) {
						if(rs.getInt("sl")==0) 
							System.out.println("San pham da het");
						else
							System.out.print("Ten san pham: "+rs.getString("tenhang"));
							System.out.println("\tSan pham con lai so luong la: "+ rs.getInt("sl"));
					}
				}
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}
			//cap nhat gia ban ngoai thi truong(chuc nang 9)
			public void UpdateGia(String mahang,double giamoi) {
				try {
					Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmt=conn.prepareCall("{call updatePrice(?,?)}");
					stmt.setString(1,mahang);
					stmt.setDouble(2, giamoi);
					stmt.execute();
					System.out.println("Da cap nhat thanh cong");
				}
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}	
			//hien thi thong tin hang hoa theo ten hang hoa (chuc nang 10)
			public void ShowHH(String tenhang) {
				try {
					Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmt=conn.prepareCall("{call searchSP(?)}");
					stmt.setString(1,tenhang);
					stmt.execute();
					ResultSet rs=stmt.executeQuery();
					while(rs.next()) {
						System.out.println("Ma hang: "+rs.getString("mahang"));
						System.out.println("Ten hang: "+rs.getString("tenhang"));
						System.out.println("Ma dai ly: "+rs.getString("madl"));
						System.out.println("So luong: "+rs.getInt("sl"));
						System.out.println("Don gia: "+rs.getDouble("dgban"));
					}
				}
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}
			//truy xuat hoa don theo ma khach hang (chuc nang 11)
			public void searchBill(String makh,String ngaylap) {
				int count=0;
				int sumPrice=0;
				try {
					Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmt=conn.prepareCall("{call searchBill(?,?)}");
					stmt.setString(1,makh);
					stmt.setString(2, ngaylap);
					stmt.execute();
					ResultSet rs=stmt.executeQuery();
					while(rs.next()) {
						System.out.println("Ma hang: "+rs.getString("mahang"));
						System.out.println("Ten hang: "+rs.getString("tenhang"));
						count+=rs.getInt("slmua");
						sumPrice+=rs.getDouble("thanhtien");
					}
					System.out.println("tong mat hang da mua: "+count); 
					System.out.println("Tong gia tien da mua: "+sumPrice);
				}
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}
			//liet ke san pham theo nhom (chuc nang 12)
			public void SearchGroup(String group) {
				try {
					Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/duan","root","conghieu2001");
					CallableStatement stmt=conn.prepareCall("{call searchG(?)}");
					stmt.setString(1,group+"%");
					stmt.execute();
					ResultSet rs=stmt.executeQuery();
					while(rs.next()) {
						System.out.print("Ma hang: "+rs.getString("mahang"));
						System.out.println("\tTen hang: "+rs.getString("tenhang"));
					}
				}
				catch(SQLException e) {
					System.out.println("Loi "+ e.getMessage());
				}
			}
}


