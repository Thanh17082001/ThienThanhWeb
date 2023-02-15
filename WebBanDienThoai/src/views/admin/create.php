<?php $this->layout('/layout/main-admin', ['title' => 'Them san pham']) ?>
<?php $this->start('body') ?>
    <main>
          <div class="container mt-4">
            <div class="container pt-5 pb-5">
              <h3 class="pb-5">Thêm sản phẩm mới</h3>
                <br>
                <?php if (isset($massage)): ?>
                    <h4><?=$this->e($massage)?></h4>
                <?php endif ?>
              <form method="POST" action="/admin/create" class="form-create">
                
                <div class="mb-4 row">
                  <label for="name" class="col-form-label col-1">Name:</label>
                  <div class="col-10">
                    <input name="name" type="text" class="form-control" id="name" placeholder="Nhập tên sản phẩm (IPhone 14 pro max)...">
                  </div>
                </div>
                <div class="mb-4 row">
                  <label for="Quanlity" class="col-form-label col-1">Quanlity:</label>
                  <div class="col-10">
                    <input name="quanlity" type="text" class="form-control" id="Quanlity" placeholder="Số lượng sản phẩm cần thêm vào ">
                  </div>
                </div>
                <div class="mb-4 row">
                  <label for="image" class="col-form-label col-1">Image</label>
                  <div class="col-10">
                    <input name="img" type="text" class="form-control" id="image" placeholder="Thêm đường dẩn hình ảnh...">
                  </div>
                </div>
                <div class="mb-5 row">
                  <label for="price" class="col-form-label col-1">Price</label>
                  <div class="col-10">
                    <input name="price" type="text" class="form-control" id="price" placeholder="Nhập giá sản phẩm (14 000 000)...">
                  </div>
                </div>
                <button type="submit" class="btn btn-primary button-create">Create</button>
              </form>
            </div>
          </div>
    </main>
<?php $this->stop() ?>
