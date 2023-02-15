<?php $this->layout('/layout/main-admin', ['title' => 'Trang chu admin']) ?>
<?php $this->start('body') ?>
    <main>
          <div class="container mt-4">
            <h3>Danh mục tất cả sản phẩm</h3>
            <table class="table mt-4">
              <thead>
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Sửa</th>
                  <th scope="col">Xóa</th>
                  </tr>
              </thead>
              <tbody>
              <?php foreach($products as $data): ?>
                <tr>
                  <th scope="row">1</th>
                  <td><?=$this->e($data['id'])?></td>
                  <td><?=$this->e($data['name'])?></td>
                  <td><?=$this->e($data['quanlity'])?></td>
                  <td><?=$this->e($data['price'])?></td>
                  <td><a href="edit/?id=<?=$this->e($data['id'])?>" class="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></a></td>
                  <td><a href="delete/?id=<?=$this->e($data['id'])?>" class="btn btn-info"><i class="fa-solid fa-trash-can"></i></a></td>
                </tr>
                <?php endforeach?>
                <tr>
                  <td class="text-center" colspan="7">Danh mục sản phẩm hiện chưa có
                    <a href="create">Thêm sản phẩm.</a>
                  </td>
                </tr>
                <!-- {{/each}} -->
              </tbody>
            </table>
          </div>
    </main>
<?php $this->stop() ?>
