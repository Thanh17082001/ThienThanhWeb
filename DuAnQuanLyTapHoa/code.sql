create database duan;
use duan;
create table khachhang(
	makh char(8)primary key,
    tenkh varchar(50),
    sdt varchar(20),
    diemthuong int
);
create table hanghoa(
	mahang char(8),
    tenhang varchar(30),
    madl char(8),
    sl int,
    ngaynhap date,
    dgnhap double,
    dgban double,
    primary key(mahang,madl),
    foreign key (madl) references daily (madl)
);
create table hoadon(
	mahd char(8),
    makh char(8),
    mahang char(8),
    ngaylap date,
    slmua int,
    thanhtien double,
    primary key (mahd,makh,mahang),
    foreign key (makh) references khachhang(makh),
    foreign key (mahang) references hanghoa(mahang)
);
create table daily(
	madl char(8) primary key,
    tendl varchar(40),
    diachi varchar(50)
);

delimiter !
-- xem cac loai hang hoa cua tiem  R

create procedure Sanpham()
begin
	select h.mahang,tenhang from hanghoa h;
end!
call SanPham!

-- kiem tra so luong hang hoa R
drop procedure soluong!
create procedure soluong()
begin
	select tenhang,sl from hanghoa ;
end!
-- kiemtran so luong mat hang cu the
create procedure soluongMH(mahang char(8))
begin
	select tenhang,sl from hanghoa 
    where hanghoa.mahang=mahang;
end!
call soluongMH("BG01")!	
-- nhap hoa don R
create procedure nhapHD( mahd char(8),makh char(8),mahang char(8),ngaylap date,slmua int,thanhtien double)
begin
	insert into hoadon values(mahd,makh,mahang,ngaylap,slmua,thanhtien);
end!

-- nhap khach hang R
create procedure nhapKH(makh char(8),tenkh varchar(50),sdt varchar(20),diemthuong int)
begin
	insert into khachhang values(makh,tenkh,sdt,diemthuong);
end!
-- ma so kh R
create procedure MaKH(makh char(8),out ma char(8))
begin
	set ma=(select makh from khachhang k where k.makh=makh);
end!

-- truy xuat hoa don R(suar lai ben java)
drop procedure truyxuatHD!
create procedure truyxuatHD(makh char(8),ngaylap date)
begin
	select k.tenkh,h.tenhang,slmua,h.dgban,thanhtien
    from hoadon hd
    inner join hanghoa h on hd.mahang=h.mahang
    inner join khachhang k on hd.makh=k.makh
    where hd.makh=makh and hd.ngaylap=ngaylap;
end!
-- tra ve mahd R
create procedure maHD(out ma char(8))
begin
	set ma=(select mahd from hoadon );
end!

-- cap nhat lai diem thuong cho khach hang R

create procedure updateDiem(makh char(8),diem int)
begin
	update khachhang
	set diemthuong=diemthuong+diem
	where khachhang.makh=makh;
end!

-- tra ve diem thuong khach hang R
create procedure Diem(makh char(8),out diem int)
begin
	set diem=(select diemthuong from khachhang k where k.makh=makh);
end!

-- cap nhat lai so luong hang hoa khi khach da mua R
drop procedure updateSL!
create procedure updateSL(mahang char(8),slmua int)
begin
	update hanghoa
    set sl=sl-slmua
    where hanghoa.mahang=mahang;
end!
call updateSL("BG01","3")!
-- tra ve don gia ban R
create function Dongia(mahang char(8))
returns double
READS SQL DATA
DETERMINISTIC
begin
	return (select dgban from hanghoa h where h.mahang=mahang);
end!
create procedure DG(mahang char(8),out dg double)
begin
	if exists((select mahang from hanghoa s where s.mahang=mahang))
    then
		set dg=Dongia(mahang);
    else 
		set dg=0;
    end if;
end!

-- nhap hang vao kho khi chua co hang 
drop procedure nhaphang!
create procedure nhaphang(mahang char(8),tenhang varchar(40),madl char(8),sl int,ngaynhap date,dgnhap double)
begin
	declare dgban double;
	set dgban=dgnhap+dgnhap*0.3;
	insert into hanghoa values (mahang,tenhang,madl,sl,ngaynhap,dgnhap,dgban);
end!
-- tra ve ma hang hoa
create procedure MaHH(mahang char (8), out ma char(8))
begin
	set ma=(select mahang from hanghoa where hanghoa.mahang=mahang);
end!

-- nhap dai ly 
create procedure nhapDL(madl char(8),tendl varchar(50),diachi varchar(50))
begin
	insert into daily values(madl, tendl, diachi);
end!
-- tra ve ma dai ly
create procedure maDL(madl char(8), out ma char(8))
begin
	set ma=(select madl from daily where daily.madl=madl);
end!

-- khi co hang trong kho r
create procedure updateSLnhap(mahang char(8),slnhap int)
begin
	update hanghoa
    set sl=sl+slnhap
    where hanghoa.mahang=mahang;
end!	
call updateSLnhap("BG001", "10")!
-- kiem tra xuat xu
drop procedure xuatxu!
create procedure xuatxu(mahang char(8))
begin
	select tendl from hanghoa h
    inner join daily d on h.madl=d.madl
    where h.mahang=mahang;
end!

-- doanh thu ngay
create procedure doanhthuD(ngay int,out dthuD double)
begin
	set dthuD=(select sum(thanhtien)
    from hoadon h
    where day(ngaylap)=ngay);
end!

-- doanh thu thang
create procedure doanhthuM(thang int,out dthuM double)
begin
	set dthuM=(select sum(thanhtien)
    from hoadon h
    where month(ngaylap)=thang);
end!
-- thay doi don gia
create procedure updatePrice(mahang char(8),newPrice double)
begin
	update hanghoa
    set dgnhap=newPrice
		,dgban=dgnhap*0.3 + dgnhap
	where hanghoa.mahang=mahang;
end!
call updatePrice("BG001", "18000")!
-- hien thi thong tin hang hoa theo ten hang hoa
create procedure searchSP(tenhang varchar(50))
begin
	select mahang, tenhang, madl, sl, dgban from hanghoa where hanghoa.tenhang=tenhang;
end!
call searchSP("OMO")!
-- truy xuat hoa don theo ma khach hang
create procedure searchBill(makh char(8),ngaylap date)
begin
	select hoadon.mahang, hoadon.slmua, h.tenhang,thanhtien from hoadon
    inner join hanghoa h on hoadon.mahang=h.mahang
    where hoadon.makh=makh and hoadon.ngaylap=ngaylap;
end!
call searchBill( "PTL", "2022-05-14")!
-- liet ke san pham theo nhom
create procedure searchG(G char(8))
begin
	select mahang,tenhang from hanghoa
    where mahang like G;
end!
call searchG("BG%")!




