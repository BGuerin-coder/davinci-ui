<template>
  <div class="section-grouping">
    <div class="section-group">
      <DvLabel as="div" uppercase>Personal Information</DvLabel>
      <div class="form-group">
        <DvLabel as="label" for="name">First Name</DvLabel>
        <input id="name" type="text" placeholder="John" />
      </div>
      <div class="form-group">
        <DvLabel as="label" for="surname">Last Name</DvLabel>
        <input id="surname" type="text" placeholder="Doe" />
      </div>
    </div>

    <div class="section-group">
      <DvLabel as="div" uppercase>Contact Information</DvLabel>
      <div class="form-group">
        <DvLabel as="label" for="phone">Phone Number</DvLabel>
        <input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvLabel from "../DvLabel.vue";
</script>
