import { Row, Col } from "antd";
import "./blog.scss";
import { useContext } from "react";
import { categoryContext } from "../../components/context/categoryContext";
function Blog() {
  const { category } = useContext(categoryContext);
  const blogg = [
    {
      id: 1,
      name: "blog AI",
      image: "images/carousel/iphone.webp",
      title:
        "Laptop AI là dòng máy tính được tích hợp công nghệ trí tuệ nhân tạo (AI), cho phép máy tính tự động học hỏi và cải thiện khả năng làm việc của mình qua cách người dùng sử dụng. Nhờ vào việc áp dụng các thuật toán AI phức tạp, laptop AI không chỉ đơn thuần là một máy tính xách tay thông thường mà còn là một thiết bị thông minh, có khả năng tự động hóa nhiều tác vụ mà người dùng thường phải thực hiện.",
    },
    {
      id: 2,
      name: "blog AI",
      image: "images/carousel/macbook.jpg",
      title:
        "Laptop AI là dòng máy tính được tích hợp công nghệ trí tuệ nhân tạo (AI), cho phép máy tính tự động học hỏi và cải thiện khả năng làm việc của mình qua cách người dùng sử dụng. Nhờ vào việc áp dụng các thuật toán AI phức tạp, laptop AI không chỉ đơn thuần là một máy tính xách tay thông thường mà còn là một thiết bị thông minh, có khả năng tự động hóa nhiều tác vụ mà người dùng thường phải thực hiện.",
    },
    {
      id: 3,
      name: "blog AI",
      image: "images/carousel/iphone2.png",
      title:
        "Laptop AI là dòng máy tính được tích hợp công nghệ trí tuệ nhân tạo (AI), cho phép máy tính tự động học hỏi và cải thiện khả năng làm việc của mình qua cách người dùng sử dụng. Nhờ vào việc áp dụng các thuật toán AI phức tạp, laptop AI không chỉ đơn thuần là một máy tính xách tay thông thường mà còn là một thiết bị thông minh, có khả năng tự động hóa nhiều tác vụ mà người dùng thường phải thực hiện.",
    },
    {
      id: 4,
      name: "blog AI",
      image: "images/carousel/macbook2.jpg",
      title:
        "Laptop AI là dòng máy tính được tích hợp công nghệ trí tuệ nhân tạo (AI), cho phép máy tính tự động học hỏi và cải thiện khả năng làm việc của mình qua cách người dùng sử dụng. Nhờ vào việc áp dụng các thuật toán AI phức tạp, laptop AI không chỉ đơn thuần là một máy tính xách tay thông thường mà còn là một thiết bị thông minh, có khả năng tự động hóa nhiều tác vụ mà người dùng thường phải thực hiện.",
    },
    {
      id: 5,
      name: "blog AI",
      image: "images/carousel/phone.webp",
      title:
        "Laptop AI là dòng máy tính được tích hợp công nghệ trí tuệ nhân tạo (AI), cho phép máy tính tự động học hỏi và cải thiện khả năng làm việc của mình qua cách người dùng sử dụng. Nhờ vào việc áp dụng các thuật toán AI phức tạp, laptop AI không chỉ đơn thuần là một máy tính xách tay thông thường mà còn là một thiết bị thông minh, có khả năng tự động hóa nhiều tác vụ mà người dùng thường phải thực hiện.",
    },
    {
      id: 6,
      name: "blog AI",
      image: "images/carousel/apple_watch.jpg",
      title:
        "Laptop AI là dòng máy tính được tích hợp công nghệ trí tuệ nhân tạo (AI), cho phép máy tính tự động học hỏi và cải thiện khả năng làm việc của mình qua cách người dùng sử dụng. Nhờ vào việc áp dụng các thuật toán AI phức tạp, laptop AI không chỉ đơn thuần là một máy tính xách tay thông thường mà còn là một thiết bị thông minh, có khả năng tự động hóa nhiều tác vụ mà người dùng thường phải thực hiện.",
    },
  ];
  return (
    <>
      <div className="all">
        <div className="blog">
          <Row justify={"center"} align={"middle"} gutter={48}>
            {blogg
              ? blogg.map((item) => (
                  <Col
                    xxl={8}
                    xl={8}
                    lg={8}
                    md={12}
                    sm={12}
                    xs={24}
                    style={(item.id - 1) % 3 === 1 ? { marginTop: "80px" } : {}}
                    key={item.id}
                  >
                    <div
                      className={`blog__list ${
                        (item.id - 1) % 3 === 1 ? "center" : "noname"
                      }`}
                    >
                      <div className="name">{item.name}</div>
                      <div className="image">
                        <img src={item.image} alt={item.image} />
                      </div>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </Col>
                ))
              : "Không có bài viết nào gần đây"}
          </Row>
        </div>
        <div className="category">
          {category
            ? [...category, ...category].map((item, index) => (
                <div
                  className="category__list"
                  key={item.id}
                  style={{ "--quantity": category.length }}
                >
                  <div className="image" style={{ "--possition": index }}>
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              ))
            : "no category"}
        </div>
      </div>
    </>
  );
}

export default Blog;
