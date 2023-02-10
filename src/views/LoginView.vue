<template>
  <div>
    <NavBar />
    <div class="form-bg">
        <form class="form-signin" @submit.prevent="signin">
          <!-- <img
            class="mb-4"
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> -->
          <h1 class="h3 mb-3 fw-normal">登入</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="user.username"
              required
            />
            <label for="floatingInput">電子郵件</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="user.password"
              required
            />
            <label for="floatingPassword">密碼</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            登入
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
        </form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      console.log(this.$http.id)
      this.$http.post(api, this.user).then((response) => {
        console.log("456", response);
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${expired}`;
          this.$router.push("/admin");
        }
      });
    },
  },
};
</script>

<style scoped>
.form-bg {
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 20%;
  background-color: white;
  padding-top:100px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
