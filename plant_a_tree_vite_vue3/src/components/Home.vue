<script setup lang="ts">
// Home.vue
import { computed, onMounted, ref, reactive } from 'vue';
import api from '@/api';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  message: string;
};

const { message = ref('Loading...') } = defineProps<Props>();

const router = useRouter();

const show: Ref<boolean> = ref(false);

const newTestObject = reactive({
  name: 'test',
  age: 18,
  address: {
    city: 'New York',
    state: 'NY'
  }
});  

const toggleShow = () => {
  show.value = !show.value;
};

const getHomeData = async () => {
  try {
    const response = await api.getHome();
    message.value = response.data.message;
  } catch (error) {
    console.error('Error fetching message:', error);
  }
};

onMounted(() => {
  getHomeData();
});

const onButtonClick = () => {
  console.log('Button clicked!');
  toggleShow();
};

const A0 = ref(45)
const A1 = ref(55)
const A2 = computed(() => {
  return A0.value + A1.value
})
  

</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ message }} {{ A2 }}</h2>
    <button @click="onButtonClick">
      Click me
    </button>
    <Transition>
      <div v-if="show" class="box">hello</div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }
  }

  .box {
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 1rem;
    background-color: yellow;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &.v-enter-active,
    &.v-leave-active {
      transition: opacity 0.5s ease;
    }

    &.v-enter-from,
    &.v-leave-to {
      opacity: 0;
    }
  }
}
</style>