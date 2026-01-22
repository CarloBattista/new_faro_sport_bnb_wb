<template>
  <button type="button" :disabled="disabled" class="btn-nf" :class="'variant-' + variant">
    <span v-if="label" class="btn-label whitespace-nowrap">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'button-nf',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn-nf {
  position: relative;
  height: 46px;
  padding: 12px 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition-property: background-color, color, opacity;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

.btn-nf:disabled {
  cursor: not-allowed !important;
  opacity: 0.5 !important;
}

.btn-nf .btn-label {
  font-size: 1rem;
  font-weight: 600;
}

/* VARIANT */
.btn-nf.variant-primary {
  color: #101828;
  border-color: #101828;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
}

.btn-nf:not(:disabled).variant-primary:hover {
  color: #fff;
  background-color: #101828;
}

.btn-nf.variant-outlined {
  color: #fff;
  border-color: #fff;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
}

.btn-nf:not(:disabled).variant-outlined:hover {
  color: #101828;
  background-color: #fff;
}
</style>
