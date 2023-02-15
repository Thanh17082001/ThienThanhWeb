<?php $this->layout('/layout/main-admin', ['title' => 'Them san pham']) ?>
<?php $this->start('body') ?>

    <main class="container">
        <h1 class="text-center my-5" >Vui lòng đăng nhập trước khi vào trang Admin</h1>
        <div class="d-flex w-100 justify-content-center ">
            <form class="w-75" action="admin/login" method="post"> 
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email"  class="form-control " name="email" />
                    <label class="form-label" >Email</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="loginPassword" class="form-control text-center" name="password"/>
                    <label class="form-label" for="loginPassword">Password</label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
        </div>
        <h4 class="text-center">Chưa có tài khoản vui lòng liên hệ chủ cửa hàng để được cung cấp</h4>
    </main>
    

<?php $this->stop() ?>
