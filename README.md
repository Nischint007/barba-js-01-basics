# 🚀 Beginner to Advanced Barba.js Series – 01 Basics

This repository is part of a **Beginner to Advanced Barba.js Series**, where we build a strong foundation for creating smooth, modern page transitions using **Barba.js + GSAP**.

This first project focuses on understanding **core transition logic, hooks, and required structure** in a simple and practical way.

---

## 📦 Core Concept

Barba.js allows you to create **seamless page transitions without full page reloads**, making your website feel fast and app-like.

In this project:

* **Barba.js** → Controls page transitions
* **GSAP** → Handles animations

---

## ⚙️ Code Breakdown

### 🔹 Initialization

```js
barba.init({
  sync: true,
```

* `sync: true`
  Runs **leave** and **enter** animations simultaneously
  → Results in smoother and more fluid transitions

---

### 🔹 Transition Setup

```js
transitions: [{
  name: "scale-effect",
```

* `name` → Identifier for the transition (useful for debugging or multiple transitions)

---

### 🔹 Leave Hook (Current Page Exit)

```js
leave(data){
  return gsap.to(data.current.container,{
    y: "-100%",
    scale: 0.7,
    duration: 1.2,
    ease: "power3.inOut"
  });
}
```

* Triggered when **leaving the current page**
* `data.current.container` → current page (`.page` in this project)

#### Effect:

* Moves page **upwards**
* Scales down → **zoom-out effect**

---

### 🔹 Enter Hook (Next Page Entry)

```js
enter(data){
  gsap.set(data.next.container,{
    y: "100%",
    scale: 0.7
  });

  return gsap.to(data.next.container,{
    y: "0%",
    scale: 1,
    duration: 1.2,
    ease: "power3.inOut"
  });
}
```

* Triggered when **entering the next page**
* `data.next.container` → next `.page`

#### Effect:

1. Starts from **below the screen**
2. Animates into place with **scale-up**

👉 Creates a clean **slide + zoom-in transition**

---

## 🧱 Required HTML Structure

In this project, `.page` is used as the Barba container.

```html
<body data-barba="wrapper">

  <div class="page" data-barba="container" data-barba-namespace="home">
    <!-- Page Content -->
  </div>

</body>
```

### 🔹 Important Attributes

* `data-barba="wrapper"`
  → Root element (only once, usually `<body>`)

* `data-barba="container"`
  → Each page container (here: `.page`)

* `data-barba-namespace`
  → Optional but useful for page-specific logic

---

## 🎯 When to Use What

* **Wrapper** → global root (only once)
* **Container (.page)** → every page
* **Namespace** → when handling multiple pages differently

---

## 🎨 Essential CSS Setup (Very Important)

These styles are **mandatory for smooth transitions**:

```css
[data-barba="container"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

[data-barba="wrapper"] {
  position: relative;
  overflow: hidden;
}
```

### Why this matters:

* Containers stack properly (no layout breaking)
* Prevents unwanted scrolling issues
* Ensures GSAP transforms like `y: 100%` work correctly

---

## 🧠 Key Takeaways

* `leave()` → animates current page out
* `enter()` → animates next page in
* `sync: true` → both run together
* `.page` acts as your **main container**
* Correct CSS setup is **critical**

---

## ✍️ Author

**Nischint Singh**

---

This is the first step in building **Awwwards-level websites with smooth transitions** using Barba.js.
