# React Hooks

Dự án này là một playground đơn giản giúp hiểu rõ cách hoạt động của các React Hooks thông dụng. Mỗi route trong ứng dụng là một ví dụ cụ thể.

## Điều hướng các hook

| Route           | Hook          | Mô tả                                                                           |
| --------------- | ------------- | ------------------------------------------------------------------------------- |
| `/use-state`    | `useState`    | Dùng để quản lý state trong component function                                  |
| `/use-effect`   | `useEffect`   | Thực thi side-effect (như gọi API, setInterval...) sau render                   |
| `/use-ref`      | `useRef`      | Truy cập hoặc lưu trữ DOM element hoặc giá trị tham chiếu không gây render lại  |
| `/use-memo`     | `useMemo`     | Ghi nhớ giá trị tính toán, tránh tính toán lại không cần thiết                  |
| `/use-callback` | `useCallback` | Ghi nhớ hàm callback, tránh tạo mới không cần thiết (thường dùng kèm `useMemo`) |
| `/use-context`  | `useContext`  | Truy xuất giá trị từ Context Provider trong cây component                       |

---

## Giải thích các Hook

### 1. `useState`

```jsx
const [count, setCount] = useState(0);
```

* Tạo một state `count` với giá trị khởi tạo là `0`.
* Khi `setCount` được gọi, component sẽ re-render với giá trị mới.

### 2. `useEffect`

```jsx
useEffect(() => {
  const id = setInterval(...);
  return () => clearInterval(id);
}, []);
```

* Chạy đoạn code sau mỗi lần render (tùy dependencies).
* Dùng để gọi API, setTimeout, lắng nghe event.
* Có thể trả về một hàm cleanup khi component unmount.

### 3. `useRef`

```jsx
const inputRef = useRef();
```

* Truy cập DOM: `<input ref={inputRef} />`
* Giữ giá trị "tham chiếu" không thay đổi giữa các render.
* Không gây re-render nếu thay đổi `.current`.

### 4. `useMemo`

```jsx
const result = useMemo(() => slowFunction(num), [num]);
```

* Tránh thực hiện tính toán nặng mỗi lần render.
* Chỉ tính lại khi dependency (`num`) thay đổi.

### 5. `useCallback`

```jsx
const handleClick = useCallback(() => doSomething(id), [id]);
```

* Trả về một hàm được memo hóa.
* Giúp tối ưu performance khi truyền hàm xuống component con (tránh re-render không cần thiết).

### 6. `useContext`

```jsx
const theme = useContext(ThemeContext);
```

* Dùng để truy cập giá trị từ React Context.
* Tránh phải truyền props qua nhiều cấp.
