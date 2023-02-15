<?php $this->layout('/layout/main', ['title' => 'Trang chu']) ?>
<?php $this->start('body') ?>
  <main>
    <div class="img-banner" id="img-banner"></div>

    <div class="social-icons">
      <ul>
        <li class="pt-2 pb-2"><a class="icons icon-fb" href="" target="_blank"><i class="fa-brands fa-facebook-f"></i></i></a></li>
        <li class="pb-2"><a class="icons icon-yt" href="" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
        <li class="pb-2"><a class="icons icon-in" href="" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li class=""><a class="icons icon-tt" href="" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
      </ul>
    </div>

    <div class="container pt-3">
        <div class="row">
            <div class="col-3">
                <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/08/11/chuyen-trang-samssung-11.png" alt="" class="banner__img">
            </div>
            <div class="col-3">
                <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/10/sanphamhot-14.jpg" alt="" class="banner__img">
            </div>
            <div class="col-3">
                <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/01/sanphamhot-12-lite-1.jpg" alt="" class="banner__img">
            </div>
            <div class="col-3">
                <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/10/04/huawei-d14-banner-nho-01.jpg" alt="" class="banner__img">
            </div>
        </div>

        <div class="list-item mt-3 py-5 ">
          <div class="previous-icon">
            <i class="fa-solid fa-caret-left"></i>
          </div>
          <div class="row product__items">
            <?php foreach($products as $data): ?>
                <div class="item col-lg-3">
                  <div class="item-img">
                    <a href=""><img src="<?=$this->e($data['img'])?>" alt="" class="w-100 h-75"></a>
                  </div>
                  <div class="info mt-3">
                    <a class="title fs-5" href="/product-detail/?id=<?=$this->e($data['id'])?>"><?=$this->e($data['name'])?></a>
                    <span class="price d-block ">
                        <strong><?=$this->e($data['price'])?></strong>
                        <del>4,490,000 ₫</del>
                    </span>
                    <span id="id"><?=$this->e($data['id'])?></span>
                    <a  class="add-to-cart btn btn-primary">Them vao gio hang</a>
                  </div>
                </div>
            <?php endforeach ?>   
          </div>

          <div class="next-icon">
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>

        <div class="client-fd mt-5 ps-5 pe-5 pb-4">
          <h3 class="pt-3 pb-2 title-user"><u>KHÁCH HÀNG</u></h3>
          <div class="row">
            <div class="col-6">
              <div class="row">
                  <div class="col-5">
                    <img class="img-user" src="https://cdn.hoanghamobile.com/i/idol/Uploads/2021/12/16/anh-cua-linh.jpg" alt="">
                  </div>
                  <div class="col-7">
                    <h4 class="name-user">VĐV Châu Tuyết Vân</h4>
                    <h6 class="job-user">VĐV Đội tuyển Teakwondo Việt Nam</h6>
                    <p>
                      Vân thấy giá bán ở Hoàng Hà Mobile tốt hơn các bên khác khá nhiều, các sản phẩm cũng phong phú và đa dạng. Vân thường qua shop để mua đồng hồ thông minh luyện tập thể thao hoặc tablet.
                    </p>
                  </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-5">
                  <img class="img-user" src="https://cdn.hoanghamobile.com/i/idol/Uploads/2022/03/01/liz-kim-cuong.jpg" alt="">
                </div>
                <div class="col-7">
                  <h4 class="name-user">Liz Kim Cương</h4>
                  <h6 class="job-user">Ca sĩ </h6>
                  <p>
                    Là một Samfan Liz không thể bỏ lỡ cơ hội sở hữu sản phẩm S22 Ultra mới. Mình tin tưởng lựa chọn Hoàng Hà Mobile một trong những đại lý uỷ quyền chính hãng của Samsung để đặt hàng và nhận sản phẩm trong thời gian sớm nhất. 
                  </p>
                </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  </main>
<?php $this->stop() ?>








