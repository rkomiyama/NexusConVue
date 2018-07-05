<template>
  <div>
    <h1>About Us</h1>
    <p>
      {{ content[0] }}
    </p>
    <p>
      {{ content[1] }}
    </p>
    <p>
      {{ content[2] }}
    </p>
    <p>
      {{ content[3] }}
    </p>
    <p>
      {{ content[4] }}
    </p>
    <p>
      {{ content[5] }}
    </p>
    <p>
      {{ content[6] }}
    </p>
    <p>
      {{ content[7] }}
    </p>
    <p>
      {{ content[8] }}
    </p>
    <p>
      {{ content[9] }}
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
