<script>
import api from '@/api';

export default {
  data() {
    return {
      message: ''
    };
  },
  async created() {
    try {
      const response = await api.getHome();
      this.message = response.data.message;
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }
};
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>