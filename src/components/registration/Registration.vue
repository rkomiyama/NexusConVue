<template>
  <div>
    <h1>Registration</h1>
    <p>
      {{ content[0] }}
    </p>
    <p>
      {{ content[1] }}
    </p>
    <p>
      {{ content[2] }}
    </p>
  </div>
</template>

<script>
import content from "./content";

export default {
  data() {
    return {
      content
    };
  }
};
</script>
