<!-- eslint-disable vue/multi-word-component-names -->
<!-- <template>
  <div>
     <form @submit.prevent="updated">
      <input v-model="title" placeholder="Title" />
      <textarea v-model="body" placeholder="Body"></textarea>
      <button type="submit">Update</button>
    </form>

  </div>
</template>
<script>
import axios from "axios";
export default{
    props: ['id'],
  data(){
    return{
      posts:[],
      title: "",
      body: "",
      editId: null ,// لتخزين id البوست اللي بنعدله

    }


  },
  mounted() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .then(res=>{
      this.title=res.data.title,
        this.body = res.data.body;    })

  },
  methods:{
    async updated() {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
        title: this.title,
        body: this.body,
        userId: 1
      });
            console.log("Updated:", res.data);
                  this.$router.push('/');
    },

  }
}
</script> -->
<template>
  <div>
    <h2>Employees</h2>
    <form @submit.prevent="getId">
      <input v-model="id" placeholder="Title" />
      <button type="submit">Update</button>
      <ul>
      <li v-for="emp in employee?[employee]:employees" :key="emp.id">{{ emp.name }}</li>
    </ul>
    </form>
    <form @submit.prevent="post">
      <input v-model="name" placeholder="name" />
      <input v-model="dapatr" placeholder="dpartment" />
      <input v-model="email" placeholder="email" />


      <button type="submit">Update</button>

    </form>


  </div>

</template>

<script>
import EmployeeService from "../views/Emolye.js";

export default {
  data() {
    return { employees: [],
       employee: null,
      id:"",
      name:"",
      dapatr:"",
      hireDate:"",
      email:"",

     };
  },
  mounted() {
    EmployeeService.getAll()
      .then(res => { this.employees = res.data; })
      .catch(err => console.log(err));
  },
  methods: {
  async getId() {
    try {
      const res = await EmployeeService.getById(this.id);
      console.log(res.data); // البيانات اللي رجعت من API
      this.employee = res.data; // لو عايز تخزنها في data
    } catch (err) {
      console.error(err);
    }
  },
  async post() {
  try {
    const res = await EmployeeService.create({
      name: this.name,
      department: this.dapatr,
      email:this.email

    });
    console.log("Created:", res.data);
    // لو حابب تحدث القائمة بعد الإضافة
    this.employees.push(res.data);
  } catch (err) {
    console.error(err);
  }
}

  }


};
</script>
