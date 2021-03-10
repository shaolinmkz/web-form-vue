<template>
  <div class="container">
    <section class="search__create">
      <div class="search__input--container">
        <img src="../assets/search.svg" alt="" />
        <input type="text" placeholder="Front end developer" />
        <button type="button">Search</button>
      </div>

      <div class="new-job">
        <button type="button" @click="handleModal">
          <span>+</span> New Job
        </button>
      </div>
    </section>

    <section class="table-section">
      <table>
        <tr>
          <th v-for="header in tableHeader" :key="header">
            {{ header }}
            <button type="button" v-if="header === 'Filter'">
              <img src="../assets/filter.svg" alt="" />
            </button>
          </th>
        </tr>

        <tr v-for="mockData in tableData" :key="mockData.id">
          <td>{{ mockData.jobTitle }}</td>
          <td>{{ mockData.dateModified }}</td>
          <td>{{ mockData.candidates }}</td>
          <td><button type="button" class="edit">Edit</button></td>
          <td><button type="button" class="delete">Delete</button></td>
        </tr>
      </table>
    </section>
  </div>

  <div v-if="modalIsOpen" class="modal">
    <form @submit.prevent="submitJob">
      <div class="form-header">
        <h2>New Job</h2>
        <p>
          Kindly provide the required information to get matched with suitable
          candidates
        </p>
      </div>
      <button type="button" class="close-modal" @click="handleModal">
        &times;
      </button>
      <div class="input-container">
        <label>Job Title</label>
        <input type="text" v-model="state.jobTitle" />
      </div>

      <div class="input-container">
        <label>Company Name</label>
        <input type="text" v-model="state.companyName" />
      </div>

      <div class="input-container">
        <label>Location</label>
        <input type="text" v-model="state.location" />
      </div>

      <div class="input-container select-option">
        <label>What type of employment is it?</label>
        <select v-model="state.employmentType">
          <option value="">Select option</option>
          <option
            v-for="employmentType in employmentTypes"
            :key="employmentType"
          >
            {{ employmentType }}
          </option>
        </select>
      </div>

      <div class="input-container">
        <label>Salary range</label>
        <input type="number" v-model="state.salaryRange" />
      </div>

      <div class="input-container">
        <label>Submission Deadline</label>
        <input type="date" v-model="state.submissionDeadline" />
      </div>

      <div class="input-container select-option">
        <label>What sector is this job categorized under?</label>
        <select v-model="state.jobCategory">
          <option value="">Select option</option>
          <option v-for="category in categories" :key="category">
            {{ category }}
          </option>
        </select>
      </div>

      <button type="submit" class="submit-btn">Submit Application</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const modalIsOpen = ref(false);

    const initialState = {
      jobTitle: "",
      companyName: "",
      location: "",
      employmentType: "",
      salaryRange: "",
      submissionDeadline: "",
      jobCategory: "",
    };

    const state = ref(initialState);
    const employmentTypes = [
      "Full-time",
      "Temporary",
      "Contract",
      "Permanent",
      "Internship",
      "Volunteer",
    ];
    const categories = [
      "Tech",
      "Health care",
      "Hospitality",
      "Customer Service",
      "Marketing",
    ];
    const tableHeader = [
      "Job title",
      "Date modified",
      "Candidates",
      " ",
      "Filter",
    ];

    const mockData = {
      jobTitle: "Front end developer",
      dateModified: "10/7/21",
      candidates: 100,
    };

    const handleModal = () => {
      modalIsOpen.value = !modalIsOpen.value;
    };

    const submitJob = () => {
      console.log({ ...state.value });
    };

    return {
      state,
      employmentTypes,
      categories,
      handleModal,
      modalIsOpen,
      tableHeader,
      tableData: "*"
        .repeat(20)
        .split("*")
        .map((x, y) => ({ ...mockData, id: y + 1 })),
      submitJob,
    };
  },
};
</script>

<style scoped>
/** Global Reset */
*,
*::before,
*::after {
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-sizing: border-box;
}

button {
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: transform linear 0.15s;
}

button:hover {
  cursor: pointer;
  transform: translateY(-2px);
}

/** Parent container (Topmost level) */
.container {
  padding: 100px 50px;
  min-width: 320px;
}

@media (max-width: 768px) {
  .container {
    padding: 100px 20px;
  }
}

/** Search */
.search__create {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.search__input--container {
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 10px 10px 30px;
  min-width: 250px;
  max-width: 500px;
  width: 100%;
  align-items: center;
}

@media (max-width: 800px) {
  .search__input--container {
    max-width: 100%;
    width: 100%;
    padding: 10px;
  }
}

.search__input--container img {
  display: inline-block;
  margin-right: 15px;
  width: 22px;
}

.search__input--container input {
  font-size: 1rem;
  border: none;
  width: 100%;
  padding: 10px 6px;
}

.search__input--container button {
  background: #ea5566;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 1rem;
}

/** Add new job button */
.new-job button {
  background: #ea5566;
  box-shadow: 0 0 5px #ea556680;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.new-job button span {
  font-size: 1.5rem;
  margin-right: 5px;
}

@media (max-width: 800px) {
  .new-job {
    margin-top: 20px;
    width: 100%;
  }
  .new-job button {
    width: 100%;
  }
}

/** Table design */
.table-section {
  margin-top: 50px;
  overflow: auto;
  width: 100%;
}

table {
  display: block;
  width: 100%;
  min-width: 1100px;
}

table > tr {
  padding: 20px 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 250px));
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.08);
}

table > tr:nth-child(1) {
  background: #0f4a7b;
  box-shadow: none;
}

th {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

th button img {
  width: 20px;
  display: inline-block;
  margin-left: 10px;
}
td {
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

td button {
  border-radius: 0;
  padding: 10px 30px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

td button.edit {
  background: #ea5566;
  border: 1px solid #ea5566;
}

td button.delete {
  background: #fff;
  border: 1px solid rgb(134, 153, 134);
  color: rgb(134, 153, 134);
}

/** Modal */
.modal {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

.modal form {
  position: relative;
  width: 100%;
  background: #fff;
  height: auto;
  max-width: 500px;
  min-width: 280px;
  padding: 20px 40px;
  overflow: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .modal form {
    margin-top: 0;
    max-width: 100%;
    min-width: 280px;
    padding: 20px;
    border-radius: 0;
  }
}

.close-modal {
  position: absolute;
  color: #0f4a7b;
  right: 10px;
  top: 0px;
  font-size: 2rem;
}

label {
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.form-header {
  padding: 10px 0;
}

.form-header h2 {
  color: #0f4a7b;
  font-size: 1.1rem;
}

.form-header p {
  color: rgb(168, 168, 168);
  font-size: 0.7rem;
}

.input-container {
  color: #0f4a7b;
  margin-bottom: 20px;
}

.input-container label {
  color: #0f4a7b;
  display: block;
  margin-bottom: 5px;
}

.input-container input,
.input-container select {
  color: #0f4a7b;
  border: 1px solid #a2b6c7;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1.1rem;
   width: 100%;
}

.submit-btn {
  border-radius: 0;
  padding: 15px 30px;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  background: #0f4a7b;
}
</style>
