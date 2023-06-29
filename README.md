#Context

- "useContext" là một hook được sử dụng để truy cập vào Context trong cây component cho phép chia sẻ dữ liệu giữa các component mà không cần truyền props qua nhiều tầng con trung gian.
- "useContext" chỉ có thể được sử dụng trong function component và chỉ có thể truy cập vào Context mà bạn đã tạo bằng "createContext"

Cách dùng: cần có 3 thành phần
-Create context
-Provider
-Consumer

1.Dùng createContext() để định nghĩa context
2.Cung cấp dữ liệu cho Context: đặt dữ liệu muốn chia sẻ trong Component cha và cung cấp nó thông qua Context Provider
3.Trong các components con, sử dụng hook useContext để truy cập vào dữ liệu của Context

```
// App.js
import React from 'react';
import {createContext} from 'react';

export const data = createContext();
const App = () => {
    const sharedData = "data"
 return (
   <MyContext.Provider value={sharedData}>
     {/* Các component con ở đây có thể truy cập vào dữ liệu của Context */}
   </MyContext.Provider>
 );
};

export default App;

```

```
// ChildComponent.js
import React, { useContext } from 'react';
import data from './App';

const ChildComponent = () => {
  const content = useContext(data);

  return <div>{content}</div>;
};

export default ChildComponent;
```

# Two-way binding

Two-way data binding là ràng buộc dữ liệu 2 chiều, cập nhật trạng thái giữa component cha và con. Nó cho phép dữ liệu được truyền từ component cha xuống component con thông qua props và cập nhật trạng thái của component cha dựa trên sự thay đổi trong component con. Ngoài ra sự thay đổi trong giao diện người dùng (như nhập liệu từ ô input) sẽ được tự động cập nhật vào mô hình dữ liệu tương ứng. Ngược lại, khi mô hình dữ liệu thay đổi (do các sự kiện hoặc quá trình xử lý), giao diện người dùng sẽ được cập nhật để phản ánh các thay đổi đó.

Ví dụ, trong một trường hợp two-way binding với một ô input, khi người dùng nhập liệu vào ô input, giá trị đó sẽ được tự động cập nhật vào biến hoặc thuộc tính tương ứng trong mô hình dữ liệu. Tương tự, khi giá trị trong mô hình dữ liệu thay đổi, nó sẽ tự động được hiển thị trong giao diện người dùng.
