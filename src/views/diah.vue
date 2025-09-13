<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex min-vh-100 bg-light" style="width: 1482px">
    <!-- Sidebar -->
    <aside class="bg-white p-3 border-end" style="width: 250px">
      <h2 class="text-primary mb-4">e-Learning</h2>
      <nav class="nav flex-column">
        <a
          v-for="item in menu"
          :key="item.title"
          href="#"
          class="nav-link text-dark d-flex align-items-center"
        >
          <i :class="item.icon + ' me-2 fs-5'"></i>
          {{ item.title }}
        </a>
      </nav>
      <div class="mt-4 p-3 bg-primary bg-opacity-10 rounded">
        <p class="small text-muted">Used space: 80%</p>
        <button class="btn btn-sm btn-primary">Upgrade plan</button>
      </div>
    </aside>

    <!-- Main content -->
    <main class="flex-grow-1 p-4">
      <nav class="navbar bg-white px-3 nav-dish">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <!-- Search على الشمال -->
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

          <!-- أيقونات على اليمين -->
          <div class="d-flex align-items-center gap-3">
            <!-- Notification Bell -->
            <button class="btn btn-outline-secondary position-relative">
              <i class="bi bi-bell"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
              ></span>
            </button>

            <!-- User Circle + Name -->
            <div class="d-flex align-items-center gap-2">
              <div
                class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                style="width: 35px; height: 35px; font-weight: bold"
              >
                Ad
              </div>
              <span>AHMED ADEL</span>
            </div>
          </div>
        </div>
      </nav>

      <h1 class="mb-4">Dashboard Overview</h1>
      <p>Welcome back</p>

      <!-- Banner -->
      <!-- <div class="d-flex justify-content-between align-items-center p-4 rounded text-white mb-4"
           style="background: linear-gradient(to right, #3b82f6, #8b5cf6);">
        <div>
          <h2 class="h5">Join Now and Get Discount Voucher Up To 20%</h2>
          <p class="small mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <img src="https://i.ibb.co/zxQw9cL/3d-student.png" alt="student" style="width:100px;height:100px;">
      </div> -->

      <!-- Stats -->
      <div class="row mb-4">
        <div class="col" v-for="stat in stats" :key="stat.label">
          <div class="card text-center">
            <div class="card-body">
              <p class="text-muted">{{ stat.label }}</p>
              <h3>{{ stat.value }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="row mb-4">
        <!-- Bar Chart -->
        <div class="col-md-6">
          <div class="card p-3">
            <h5>course Enrollments (2025)</h5>
            <canvas id="barChart" style="height: 200px"></canvas>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-md-6">
          <div class="card p-3">
            <h5>student by Category</h5>
            <canvas id="pieChart" style="height: 200px"></canvas>
          </div>
        </div>
      </div>

      <!-- Recent Courses -->
      <!-- <div class="row">
        <div class="col-md-4 mb-3" v-for="course in recentCourses" :key="course.title">
          <div class="card p-3">
            <h6>{{ course.title }}</h6>
            <small class="text-muted">{{ course.date }}</small>
            <p class="small">{{ course.desc }}</p>
            <a href="#">Read post →</a>
          </div>
        </div>
      </div> -->
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const menu = [
  { title: 'Dashboard', icon: 'bi-house' },
  { title: 'Course', icon: 'bi-journal-bookmark' },
  { title: 'Exams', icon: 'bi-file-text' },
  { title: 'Instructors', icon: 'bi-people' },
  { title: 'Students', icon: 'bi-people' },
  { title: 'Profile', icon: 'bi-person-circle' },
  { title: 'Quiz', icon: 'bi-puzzle' },
]

const stats = [
  { label: 'Toltel Course', value: 248 },
  { label: 'Active student', value: 12847 },
  { label: 'Instrctours', value: 156 },
    { label: 'Exams', value: 156 },
      { label: 'Quiz', value: 156 },


]

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Score',
      data: [80, 90, 85, 95, 70, 85, 75, 90, 95, 85, 80, 90],
      backgroundColor: '#3b82f6',
    },
  ],
}

const homework = [
  { title: 'Web Design', progress: 55 },
  { title: 'Ads Facebook', progress: 75 },
  { title: 'Graphic Designer', progress: 70 },
  { title: 'Content Creator', progress: 90 },
]

// const recentCourses = [
//   { title: 'Building your API Stack', date: '18 Jan 2022', desc: 'The rise of RESTful APIs...' },
//   { title: 'Become Android Developer', date: '18 Jan 2022', desc: 'Learn Android development...' },
//   { title: 'Collaboration = better designer', date: '14 Jan 2022', desc: 'Collaboration can...' },
// ];
/* global Chart */
onMounted(() => {
  const barCtx = document.getElementById('barChart').getContext('2d')
  const pieCtx = document.getElementById('pieChart').getContext('2d')

  // Bar Chart
  new Chart(barCtx, {
    type: 'bar',
    data: barData,
    options: { responsive: true, maintainAspectRatio: false },
  })

  // Pie Chart
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: homework.map((h) => h.title),
      datasets: [
        {
          data: homework.map((h) => h.progress),
          backgroundColor: ['#3b82f6', '#ef4444', '#f59e0b', '#10b981'],
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
  })
})
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
.div {
}
canvas {
  max-height: 300px;
  width: 100% !important;
}
.nav-dish{
  background-Color:white !important;
}
</style>
