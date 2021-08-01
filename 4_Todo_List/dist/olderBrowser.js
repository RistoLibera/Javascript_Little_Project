(() => {
  "use strict";

  const e = () => {
    let e = localStorage.getItem("myProject");
    return e ? JSON.parse(e) : [];
  },
        t = t => e().find(e => e.name == t),
        o = (t, o) => {
    let r,
        l = e();
    l.map((e, n) => {
      e.name == o.name && t === o ? (l.splice(n, 1), r = JSON.stringify(l), localStorage.setItem("myProject", r)) : e.name == o.name && (l.splice(n, 1, t), r = JSON.stringify(l), localStorage.setItem("myProject", r));
    });
  },
        r = e => {
    localStorage.setItem("currentProject", JSON.stringify(e));
  },
        l = () => {
    let e = localStorage.getItem("currentProject");
    return e ? JSON.parse(e) : null;
  },
        n = e => {
    let t = (e => {
      let t = [];
      return e.todo.forEach((e, o) => {
        let r = `\n    <tr class='${e.checked ? "complete" : e.priority}'>\n      <td>${e.title}</td>\n      <td>${e.due}</td>\n      <td>${e.priority}</td>\n      <td>\n        <button class='check-todo' data-index='${o}'>\n          ${e.checked ? "<span class='material-icons'>task_alt</span>" : "<span class='material-icons'>remove_circle_outline</span>"}\n        </button>\n      </td>\n      <td><button class='edit-todo' data-index='${o}'><span class="material-icons">description</span></button></td>\n      <td><button class='delete-todo' data-index='${o}'><span class="material-icons">delete_forever</span></button></td>\n    </tr>`;
        t.push(r);
      }), t;
    })(e);

    return t ? t.map(e => e).join("") : [];
  },
        c = e => {
    let t = l(),
        n = l(),
        c = e.target.closest("button").dataset.index,
        a = n.todo[c];
    a.checked = !a.checked, r(n), o(n, t), location.reload();
  },
        a = e => {
    if (!confirm("Delete this todo?")) return;
    let t = l(),
        n = l(),
        c = e.target.closest("button").dataset.index;
    n.todo.splice(c, 1), r(n), o(n, t), location.reload();
  },
        d = document.getElementsByClassName("modal"),
        s = document.querySelector(".project"),
        i = document.querySelector(".toggle-project"),
        m = document.querySelectorAll(".toggle-icons"),
        u = document.getElementById("add-project"),
        y = document.querySelector(".new-project-form-modal"),
        g = document.querySelector(".new-project-form"),
        p = document.getElementsByClassName("cancel"),
        S = document.querySelector(".project-list"),
        f = document.querySelector(".project-body"),
        h = document.querySelector(".project-name"),
        v = document.querySelector(".todo-list"),
        L = document.getElementsByClassName("list-item");

  i.onclick = () => {
    s.classList.toggle("active"), m.forEach(e => e.classList.toggle("hidden"));
  }, u.onclick = () => {
    y.classList.toggle("hidden");
  }, g.addEventListener("submit", t => {
    let o = {
      name: t.target.elements.name.value,
      todo: []
    };
    (t => {
      let o = e();
      o.push(t), localStorage.setItem("myProject", JSON.stringify(o));
    })(o), r(o);
  }), Array.from(p).forEach(e => {
    let t = e.closest("section");

    e.onclick = () => {
      t.classList.toggle("hidden");
    };
  }), window.addEventListener("click", e => {
    e.target.className.split(" ").some(e => "modal" == e) && Array.from(d, e => {
      e.classList.add("hidden");
    });
  }), e().map(e => {
    let t = document.createElement("li");
    t.innerHTML = e.name, t.classList.add("list-item"), S.appendChild(t);
  }), Array.from(L).forEach(e => {
    e.addEventListener("click", o => {
      let l = t(e.textContent);
      r(l), h.innerHTML = l.name, v.innerHTML = n(l), f.classList.remove("hidden"), location.reload();
    });
  }), (() => {
    let e = Array.from(L),
        o = l();
    e.forEach(e => {
      e.classList.remove("selected"), t(e.textContent).name == o.name && e.classList.add("selected");
    });
  })();
  const E = document.querySelector(".project-body"),
        j = document.querySelector(".project-name"),
        q = document.querySelector(".edit-project-form-modal"),
        k = document.querySelector(".edit-project-form"),
        b = document.querySelector(".edit-project"),
        N = document.querySelector(".delete-project"),
        C = document.querySelector(".new-todo-form-modal"),
        x = document.querySelector(".new-todo-form"),
        A = document.querySelector(".new-todo"),
        I = document.querySelector(".todo-list"),
        $ = (0 == e().length && E.classList.add("hidden"), (() => {
    let e = l();
    e && (j.innerHTML = e.name, E.classList.remove("hidden"), I.innerHTML = n(e));
  })(), b.onclick = () => {
    q.classList.toggle("hidden");
  }, k.addEventListener("submit", e => {
    let t = l(),
        n = l(),
        c = e.target.elements;
    n.name = c.name.value, r(n), o(n, t);
  }), (e => {
    let t = l().name;
    e.name.value = t;
  })(k), N.addEventListener("click", () => {
    if (!confirm("Delete this project?")) return;
    let e = l(),
        t = l();
    localStorage.removeItem("currentProject"), o(t, e), location.reload();
  }), A.onclick = () => {
    C.classList.toggle("hidden");
  }, x.addEventListener("submit", e => {
    let t = (e => {
      let t = e.target.elements;
      return {
        title: t.title.value,
        due: t.due.value,
        priority: t.priority.value,
        checked: !1
      };
    })(e),
        n = l(),
        c = l();

    c.todo.push(t), r(c), o(c, n);
  }), document.getElementsByClassName("check-todo")),
        w = document.getElementsByClassName("edit-todo"),
        B = document.querySelector(".edit-todo-form-modal"),
        P = document.querySelector(".edit-todo-form"),
        J = document.getElementsByClassName("delete-todo");
  Array.from($).forEach(e => {
    e.addEventListener("click", c);
  }), Array.from(w).forEach(e => {
    e.addEventListener("click", e => {
      B.classList.toggle("hidden");
      let t = e.target.closest("button").dataset.index;
      ((e, t) => {
        let o = l().todo[t];
        const {
          title: r,
          due: n,
          priority: c
        } = o;
        let a = r,
            d = n,
            s = c;
        e.title.value = a, e.due.value = d, e.priority.value = s;
      })(P, t), P.addEventListener("submit", e => {
        ((e, t) => {
          let n = l(),
              c = l(),
              a = c.todo[t],
              d = e.target.elements;
          a.title = d.title.value, a.due = d.due.value, a.priority = d.priority.value, r(c), o(c, n);
        })(e, t);
      });
    });
  }), Array.from(J).forEach(e => {
    e.addEventListener("click", a);
  });
})();
