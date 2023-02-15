<?php $this->layout('/layout/main', ['title' => 'Lich su mua hang']) ?>
<?php $this->start('body') ?>
    <main>
        <div class="main-div mt-4">
            <div class="form-search-phonenumber mt-5">
                <div class="mb-3"><img class="lsmh" src="https://www.thegioididong.com/lich-su-mua-hang/images/i1.png" alt=""></div>
                <p>Tra cứu thông tin</p>
                <form action="/history-order" method="post">
                    <div>
                        <input type="text" name="phone" id="txtphonenumber" placeholder="Nhập số điện thoại mua hàng"> <br>
                        <button class="btn-searchP">Tiếp tục</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
<?php $this->stop() ?>