<?php $this->layout('/layout/main', ['title' => 'San pham']) ?>
<?php $this->start('body') ?>
    <main class="container">
        <div class="row pt-3 ">
            <div class="col-8">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://cdn.tgdd.vn/2022/10/banner/800-200-800x200-128.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="https://cdn.tgdd.vn/2022/11/banner/800-200-800x200-15.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="https://cdn.tgdd.vn/2022/11/banner/reno8-800-200-800x200.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <img src="https://cdn.tgdd.vn/2022/10/banner/sticky-mseri3-390x97-1.png" alt="">
                </div>
                <div class="row">
                    <img src="https://cdn.tgdd.vn/2022/10/banner/Oppo-A54-390x97-390x97.png" alt="">
                </div>
            </div>
        </div>

        <div class="d-flex align-items-baseline pt-4">
            <i class="fa-solid fa-filter pe-3"></i>
            <select class="form-select">
                <option selected>Hãng</option>
                <option value="1">Apple</option>
                <option value="2">SamSung</option>
                <option value="3">Oppo</option>
                </select>
        </div>

        <div class="row pt-4">
        <?php foreach($products as $data): ?>
            <div class="col-3">
                <div class="item">
                    <div class="item-img">
                        <a href=""><img src="<?=$this->e($data['img'])?>" alt=""></a>
                    </div>
                    <div class="info">
                        <a class="title" href="/dien-thoai-di-dong/oppo-4-64gb-a57-chinh-hang"><?=$this->e($data['name'])?></a>
                        <span class="price d-block">
                            <strong class="price_real"><?=$this->e($data['price'])?></strong>
                            <del>4,490,000 </del>
                        </span>
                        <span hidden id="id"><?=$this->e($data['id'])?></span>
                        <button class="add-to-cart mt-2">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        <?php endforeach ?>
        </div>
    </main>
<?php $this->stop() ?>