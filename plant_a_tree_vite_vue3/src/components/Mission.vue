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
      const response = await api.getMission();
      this.message = response.data.message;
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }
};
</script>

<template>
  <div class="mission">
    Our Mission:
    {{ message }}
  </div>
</template>
<style>
.mission {
  
}
</style>