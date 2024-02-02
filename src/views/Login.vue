<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { AdminApi } from '@/api/admin'

function onFinish(values: any) {
  console.log('Success:', values)
}

function onFinishFailed(errorInfo: any) {
  console.log('Failed:', errorInfo)
}

const router = useRouter()
const formState = reactive({
  username: '',
  password: '',
})

async function login() {
  const res = await AdminApi.login(formState)
  await router.replace('/')
}
</script>

<template>
  <div class="register">
    <a-row style="width: 90%; margin: 0 auto; display: flex; align-items: center; flex-wrap: wrap;">
      <a-col
        class="slogan"
        :xs="24"
        :sm="14"
      >
        <div>
          Built for<br>
          SJTUers
        </div>
        <div class="help">
          媒体站在已有电影站的基础上 ，使用Jellyfin提供媒体管理服务。<br>
          增加了番剧 、电视剧 、音乐、网课等资源。<br>
          为同学们提供更加丰富的内网生活，希望大家能够喜欢。
        </div>
      </a-col>
      <a-col
        :xs="24"
        :sm="10"
      >
        <a-form
          :model="formState"
          name="basic"
          autocomplete="off"
          layout="vertical"
          @finish="onFinish"
          @finish-failed="onFinishFailed"
        >
          <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" class="w-full">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

 <style lang="scss" scoped>
 @media (max-width: 768px) {
  .slogan {
    margin: 20px 0;
    font-size: 48px;
    font-weight: 500;
    text-align: center;
    .help {
      margin-top: 20px;
    }
  }
 }

 @media (min-width: 768px) {
  .register {
    justify-content: center;
    display: flex;
    align-items: center;
    flex: 1;
  }
  .slogan {
    font-size: 64px;
    font-weight: 500;
  }
 }
 .register {
  width: 100vw;
  height: 100vh;
  .slogan {
    .help {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .register-form {
    border-radius: 5px;
    padding: 20px;
    .label {
      height: 30px;
      line-height: 30px;
    }
  }
 }
 </style>
