
```CSS
.container {
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.navbar {
    background-color: transparent;
    color: #333;
    padding: 10px;
    flex-wrap: nowrap;
    display:flex;
    width: 100%;
    justify-content: space-between;
}

.logo img {
    height: 180px;
    width: 300px;
}

.navbar-collapse {
    display: flex;
    /* float: right; */
    width: 100%;
}
.navbar-collapse ul {
    margin: 0;
     padding: 0px 10px;

}
.nav-item {
    display: inline-block;
    margin: 0 10px;
}
.nav-link {
    text-decoration: none;
    color: #333;
    text-align: center;
    border-radius: 15px;
    justify-content: space-evenly;
    padding: 7px;
}
.nav-link:hover {
    background-color: var(--colorPrincipal);
}
.dropdown-menu {
    display: none;
    color: #333;
    background-color: var(--blanco);
    position: absolute;
}
.nav-item:hover .dropdown-menu {
    display: block;
}
.dropdown-item {
    color: #333;
    padding: 8px 16px;
    display: block;
    text-decoration: none;
}
.dropdown-item:hover {
    background-color: var(--colorPrincipal);
}

/* .navbar-nav {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
} */

/* ul.navbar-nav {
    flex-direction: row;
} */

/* li.nav-item.dropdown:last-child a.nav-link.dropdown-toggle {
    padding: 7px;
}
.navbar-toggler {
    display: none;
} */
```
```HTML

<div class="container">
<nav class="navbar">
    <a class="navbar-brand" [routerLink]="['/home']">
      <div class="logo">
        <img src="../../../assets/images/LOGO_WEB.png" alt="Logo">
      </div>
    </a>
    <!-- TODO EN MOBILE OCULTAR MENU Y MOSTRAR HAMBURGUESA PARA DESPLEGAR MENU -->
    <!-- <input type="checkbox" id="menu-toggle" class="navbar-toggler">
    <label for="menu-toggle" class="navbar-toggler-icon"></label> -->

    <nav class="navbar-collapse">
      <ul class="">
        <li *ngFor="let item of menuItems" class="nav-item">
          <a [routerLink]="item.routes" class="nav-link">{{item.title}}</a>
          <ul *ngIf="item.childItems" class="dropdown-menu">
            <li *ngFor="let childItem of item.childItems"><a [routerLink]="childItem.routes" class="dropdown-item">{{childItem.title}}</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </nav>

  </div>

```
