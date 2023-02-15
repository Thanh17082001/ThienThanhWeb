<?php $this->layout('/layout/main', ['title' => 'Gio hang']) ?>
<?php $this->start('body') ?>
    <main>
        <div class="container pt-5">
            <div class="row">
                <form method="post" action="/order" class="col-5 form__order">
                    <h4 class="pb-3">Thông tin người mua/nhận hàng</h4>
                    <div class="pb-3">
                        <input name="fullname" id="name_kh" type="text" class="form-control" placeholder="Họ và tên">
                    </div>
                    <div class="pb-3">
                        <input name="phone" id="phonenumber" type="text" class="form-control" placeholder="Số điện thoại">
                    </div>
                    <div class="pb-3">
                        <input name="address" id="address" type="text" class="form-control" placeholder="Địa chỉ giao hàng ( 124/Phạm Ngũ lão/An Hòa/Ninh Kiều)...">
                    </div>
                    <div class="pb-3">
                        <textarea name="note" type="text" class="form-control" placeholder="Ghi chú" rows="6"></textarea>
                    </div>
                </form>

                <div class="col-7">
                    <h3>Chi tiết sản phảm trong giỏ hàng</h3>
                    <hr>
                    <div class="showProductToPay row">
                        <?php if (isset($products)): ?>
                            <?php foreach($products as $data): ?>
                                <img class="col-2" src="<?=$this->e($data['img'])?>" alt="" >
                                <p class="col-5"><?=$this->e($data['name'])?></p>
                                <div class="col-2 pt-4">
                                    <span class="id" hidden><?=$this->e($data['id'])?></span>
                                    <a class="changequanlity"><input class="inputDown" type="button" value="-"></a>
                                    <input class="quantity" type="number" name="quantity" min="1" value="<?=$this->e($data['quanlityOrder'])?>" disabled>
                                    <a class="changequanlity"><input class="inputDown" type="button" value="+"></a>
                                </div>
                                <a href="/delete/?id=<?=$this->e($data['id'])?>" class="col-1 pt-4">
                                    <i class="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#model-delete" ></i>
                                </a>
                                <div class="col-1 pt-4">
                                    <p class="fw-bold text-dark"><?=$this->e($data['totalPrice'])?></p>
                                </div>
                            <?php endforeach?>
                        <?php endif ?>
                    </div>
                    <hr>

                    <div class="row">
                        <div class="col-8"></div>
                        <div class="col-4 d-flex align-items-baseline pt-3">
                            <h6>Tổng tiền: </h6>
                            <p class="sum-price fw-bold text-danger"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <input class="sanpham" name="sanpham" type="text" hidden>
                        <button type="submit" class="btn btn-info btn__order">Đặt hàng</button></a>
                    </div>
                </div>


            </div>
        </div>
    </main>

<?php $this->stop() ?>
