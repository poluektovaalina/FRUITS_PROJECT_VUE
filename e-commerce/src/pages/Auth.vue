<template>
    <div class="min-h-screen flex items-center justify-center ">
        <form @submit.prevent="createUser" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6">
            <h2 class="text-3xl font-extrabold text-gray-800 text-center">Регистрация</h2>

            <div>
                <label for="username" class="username block text-sm font-medium text-gray-700 mb-1">
                    Имя пользователя
                </label>
                <input v-model="username" id="username" type="text" placeholder="Введите имя"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
                <label for="email" class="email block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input v-model="email" id="email" type="email" placeholder="you@example.com"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
                <label for="password" class="password block text-sm font-medium text-gray-700 mb-1">
                    Пароль
                </label>
                <input v-model="password" id="password" type="password" placeholder="••••••••"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <button type="submit"
                class="w-full py-2 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Зарегистрироваться
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();

async function createUser(event) {
    if (!username.value || !email.value || !password.value) {
        alert('Все поля обязательны для заполнения');
        return;
    }

    const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username.value, // ✅ исправлено
            email: email.value,
            password: password.value,
        }),
    });

    if (response.ok) {
        console.log('Пользователь зарегистрирован');
        localStorage.setItem('username', username.value);
        router.push('/login');
    } else {
        console.error('Ошибка регистрации');
        const errorData = await response.json();
        alert(errorData.message || 'Ошибка регистрации');
    }
}
</script>