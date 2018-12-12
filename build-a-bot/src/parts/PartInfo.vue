<template>
    <div>
        <h1>{{part.title}}</h1>
        <div>
            {{part.description}}
        </div>
    </div>
</template>

<script>
import getPartsMixin from "../parts/get-parts-mixin.js";

export default {
  name: "PartInfo",
  mixins: [getPartsMixin],
  props: {
    type: { type: String },
    id: {
      type: [String, Number],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
      const { type, id } = this;
      return this.parts[type].find(p => p.id === +id);
    }
  }
};
</script>

