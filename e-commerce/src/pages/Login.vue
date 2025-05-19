<template>
    <div>
        <div class="min-h-screen flex items-center justify-center ">
    <form @submit.prevent="loginUser" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6">
      <h2 class="text-3xl font-extrabold text-gray-800 text-center">Вход</h2>

      <div>
        <label for="username" class="username block text-sm font-medium text-gray-700 mb-1">
          Имя пользователя
        </label>
        <input
          v-model="username"
          id="username"
          type="text"
          placeholder="Введите имя"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label for="password" class="password block text-sm font-medium text-gray-700 mb-1">
          Пароль
        </label>
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="••••••••"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        class="w-full py-2 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Войти
      </button>
    </form>
  </div>
    </div>
</template>

<script setup>

</script>
