<?php $this->layout('/layout/main-admin', ['title' => 'Chinh sua san pham']) ?>
<?php $this->start('body') ?>
    <main>
          <div class="container mt-4 pt-4">
            <h3>Chỉnh sửa sản phẩm</h3>
            <?php foreach($products as $data): ?>
                <form method="POST" action="/admin/edit" class="form-create">
                <div class="mb-4 row">
                    <label for="id" class="col-form-label col-1">ID:</label>
                    <div class="col-10">
                    <input name="id" type="text" class="form-control" id="id" value="<?=$this->e($data['id'])?>" placeholder="Nhập id sản phẩm (001)...">
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="name" class="col-form-label col-1">Name:</label>
                    <div class="col-10">
                    <input name="name" type="text" class="form-control" id="name" value="<?=$this->e($data['name'])?>" placeholder="Nhập tên sản phẩm (IPhone 14 pro max)...">
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="name" class="col-form-label col-1">So luong :</label>
                    <div class="col-10">
                    <input name="quanlity" type="text" class="form-control" id="name" value="<?=$this->e($data['quanlity'])?>" placeholder="Nhập tên sản phẩm (IPhone 14 pro max)...">
                    </div>
                </div>
                
                <div class="mb-4 row">
                    <label for="image" class="col-form-label col-1">linkImage</label>
                    <div class="col-10">
                    <input name="image" type="text" class="form-control" id="image" value="<?=$this->e($data['img'])?>" placeholder="Thêm đường dẩn hình ảnh...">
                    </div>
                </div>
                <div class="mb-5 row">
                    <label for="price" class="col-form-label col-1">Price</label>
                    <div class="col-10">
                    <input name="price" type="text" class="form-control" id="price" value="<?=$this->e($data['price'])?>" placeholder="Nhập giá sản phẩm (14 000 000)...">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary button-edit">Edit</button>
                </form>
                <?php endforeach?>
          </div>
    </main>
<?php $this->stop() ?>
