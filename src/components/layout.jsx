import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Sidebar />
        <Main pageTitle={props.pageTitle} todos={props.todos} />
      </div>
    </div>
  );
}

export default Layout;
