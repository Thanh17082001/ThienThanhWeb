<?php $this->layout('/layout/main', ['title' => 'Trang chu']) ?>
<?php $this->start('body') ?>
    <main class="container">
        <hr class="mt-5">
        <div class="row">
        <?php foreach($products as $data): ?>
            <div class="col-7">
                <img src="<?=$this->e($data['img'])?>" alt="">
            </div>
            <div class="col-5">
                <h4>Name: <?=$this->e($data['name'])?></h4>
            <p class="pt-3 pb-3">Giá: <?=$this->e($data['price'])?></p>
            <button type="button" class="btn btn-success">Thêm vào giỏ hàng</button>
            
            <div class="policy-list pt-5">
                <p class="pb-3">- Hư gì đổi nấy <strong>12 tháng</strong> tại 3364 siêu thị toàn quốc (miễn phí tháng đầu)</p>
                <p class="pb-2">- Bảo hành <strong> chính hãng điện thoại 1 năm</strong> tại các trung tâm bảo hành hãng</p>
                <p>- Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</p>
            </div>
            </div>
        <?php endforeach ?>
        </div>
    </main>
<?php $this->stop() ?>