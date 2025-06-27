<script setup>
import { onMounted } from 'vue';
onMounted(() => {
   location.href = '/duocode.docx';
   setTimeout(() => {
      location.href = '/introduction/overview';
   }, 1000);
});
</script>