<template>
  <div class="file-header">
    <div class="file-header__left">
      <div class="file-header__icon">
        <Icon :name="icon" />
      </div>
      <div class="file-header__name">
        <span v-if="!isRenaming">{{ name }}</span>
        <input
          v-else
          v-model="newName"
          @blur="renameFile"
          @keyup.enter="renameFile"
          @keyup.esc="cancelRename"
        />
      </div>
    </div>
    <div class="file-header__right">
      <button @click="expandFile" :disabled="isRenaming">
        <Icon name="expand" />
      </button>
      <button @click="renameFile">
        <Icon name="edit" />
      </button>
      <button @click="deleteFile">
        <Icon name="delete" />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'FileHeader',
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isRenaming: false,
      newName: this.name,
    };
  },
  methods: {
    expandFile() {
      if (this.isRenaming) return;
      // Logic to expand the file
    },
    renameFile() {
      this.isRenaming = !this.isRenaming;
      if (!this.isRenaming) {
        // Logic to rename the file
      }
    },
    cancelRename() {
      this.isRenaming = false;
      this.newName = this.name;
    },
    deleteFile() {
      // Logic to delete the file
    },
  },
};
</script>

<style scoped>
.file-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.file-header__left {
  display: flex;
  align-items: center;
}

.file-header__icon {
  margin-right: 10px;
}

.file-header__name {
  font-size: 16px;
}

.file-header__right button {
  margin-left: 10px;
}
</style>