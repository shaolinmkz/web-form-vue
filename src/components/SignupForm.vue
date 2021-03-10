<template>
  <form autocomplete="off" @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      autocomplete="off"
      required
      v-model="email"
    />

    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      autocomplete="off"
      required
      v-model="password"
    />

    <label for="role">Role:</label>
    <select v-model="role" required>
      <option value="">Select role</option>
      <option value="UI/UX designer">UI/UX designer</option>
      <option value="Frontend developer">Frontend developer</option>
      <option value="Backend developer">Backend developer</option>
    </select>

    <label for="tempSkill">Skills:</label>
    <input
      type="text"
      id="tempSkill"
      placeholder="Html, Css, photoshop"
      v-model="tempSkill"
      @keyup="addSkill"
    />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="removeSkill(skill)"
    >
      {{ skill }} <span>&times;</span>
    </div>

    <div class="terms">
      <input type="checkbox" id="terms" v-model="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button type="submit">Create an Account</button>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms and conditions: {{ terms ? "✅" : "❌" }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      if (
        (e.keyCode === 188 || e.keyCode === 13) &&
        this.skills.find(
          (val) =>
            val.toLowerCase() === this.tempSkill.toLowerCase() ||
            val.toLowerCase() ===
              this.tempSkill.slice(0, this.tempSkill.length - 1).toLowerCase()
        )
      ) {
        this.tempSkill = "";
        return;
      }

      if (e.keyCode === 188 && this.tempSkill) {
        this.skills.push(this.tempSkill.slice(0, this.tempSkill.length - 1));
        this.tempSkill = "";
      }

      if (e.keyCode === 13 && this.tempSkill) {
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((val) => val !== skill);
    },
    handleSubmit() {
      alert(
        JSON.stringify({
          email: this.email,
          password: this.password,
          role: this.role,
          terms: this.terms,
          skills: this.skills,
        })
      );
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

p {
  text-align: center;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input:focus {
  border-bottom: 2px solid rgb(78, 78, 243);
}

.terms {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.terms input[type="checkbox"] {
  width: 20px;
  padding: 0;
  cursor: pointer;
}

.terms label {
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.pill span {
  display: none;
}
.pill:hover span {
  display: inline-block;
}

button {
  background: #0b6dff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

.submit {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>