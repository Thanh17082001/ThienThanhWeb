<?php $this->layout('/layout/main', ['title' => 'Lich su mua hang']) ?>
<?php $this->start('body') ?>
    <main>
        <div class="container mt-5">
            <div class="row">
            <?php foreach($orders as $data): ?>
                <div class="col-4 info mt-5">
                    <p><i class="fa-solid fa-user me-2"></i>Thông tin cá nhân</p>
                    <p>Họ tên: <strong><?=$this->e($data[0]['fullname'])?></strong></p>
                    <p>Số điện thoại: <strong><?=$this->e($data[0]['phone'])?></strong></p>
                </div>
    

                <div class="col-8 show-buyed mt-5">
                    <h3>Đơn hàng đã mua gần đây</h3>
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col" colspan="2">Sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Ngay</th>
                            </tr>
                        </thead>
                    <tbody>
                    <?php foreach($data[1] as $info): ?>
                    <tr>
                        <th scope="row">1</th>
                        <td><?=$this->e($info['name'])?></td>
                        <td><?=$this->e($info['name'])?></td>
                        <td><?=$this->e($info['quanlity'])?></td>
                        <td><?=$this->e($info['price_order'])?></td>
                        <td><?=$this->e($info['order_date'])?></td>
                    </tr>
                    <?php endforeach?>
                    </tbody>
                </table>
                </div>
                <hr  width="30%" />
            <?php endforeach?>
            </div>
        </div>
    </main>
<?php $this->stop() ?>