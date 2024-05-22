import Login from "../Authentication/Login";
import Profile from "../Authentication/Profile";
import UpdateProfile from "../Authentication/Profile/UpdateProfile";
import Register from "../Authentication/Register";
import Addition from "../Components/Addition";
import ArrayMapDemo from "../Components/ArrayMapDemo";
import Blogs from "../Components/Blogs";
import Blogs2 from "../Components/Blogs2";
import Blogs3 from "../Components/Blogs3";
import LocalStorage, {
  BrowserStorageByHook,
} from "../Components/BrowserStorage";
import BrowserStorage, { SessionStorage } from "../Components/BrowserStorage";
import Counter from "../Components/Counter";
import { Counters } from "../Components/Counters";
import CourseDetail from "../Components/CourseDetail";
import CourseList from "../Components/CourseList";
import Courses from "../Components/Courses";
import Destructuring from "../Components/Destructuring";
import ImageGallery from "../Components/ImageGallery";
import LightBulb from "../Components/LightBulb";
import MUiComponents from "../Components/MUiComonents";
import MyPortfolio from "../Components/MyPortfolio";
import PersistForm from "../Components/PersistForm";
import Props2 from "../Components/Porps2";
import Products from "../Components/Products";
import ProductDetail from "../Components/Products/ProductDetail";
import Props from "../Components/Props";
import PropsDemo3 from "../Components/PropsDemo3";
import SliderComponent from "../Components/SliderComponent";
import UseContext from "../Components/UseContext";
import UseEffectDemo from "../Components/UseEffectDemo";
import UseEffectDemo2 from "../Components/UseEffectDemo2";
import UseStateDemo from "../Components/UseStateDemo";
import Users from "../Components/Users";
import FormikDemo from "../Fomik";
import Home from "../Pages/Home";
import Tabs from "../Tabs";

export const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/array-map-demo",
    component: ArrayMapDemo,
  },
  {
    id: 3,
    path: "/products",
    component: Products,
  },
  {
    id: 4,
    path: "/Props",
    component: Props,
  },
  {
    id: 5,
    path: "/Props2",
    component: Props2,
  },
  {
    id: 6,
    path: "/use-state",
    component: UseStateDemo,
  },
  {
    id: 7,
    path: "/counter",
    component: Counter,
  },
  {
    id: 8,
    path: "/gallery",
    component: ImageGallery,
  },
  {
    id: 9,
    path: "/use-effect",
    component: UseEffectDemo,
  },
  {
    id: 10,
    path: "/use-effect2",
    component: UseEffectDemo2,
  },
  {
    id: 11,
    path: "/mui",
    component: MUiComponents,
  },
  {
    id: 12,
    path: "/props3",
    component: PropsDemo3,
  },
  {
    id: 13,
    path: "/destructuring",
    component: Destructuring,
  },
  {
    id: 14,
    path: "/use-context",
    component: UseContext,
  },
  {
    id: 15,
    path: "/tabs",
    component: Tabs,
  },
  {
    id: 16,
    path: "/addition",
    component: Addition,
  },
  {
    id: 17,
    path: "/light",
    component: LightBulb,
  },
  {
    id: 18,
    path: "/portfolio",
    component: MyPortfolio,
  },
  {
    id: 19,
    path: "/formik",
    component: FormikDemo,
  },
  {
    id: 20,
    path: "/blogs",
    component: Blogs,
  },
  {
    id: 21,
    path: "/blogs2",
    component: Blogs2,
  },
  {
    id: 22,
    path: "/blogs3",
    component: Blogs3,
  },
  {
    id: 23,
    path: "/users",
    component: Users,
  },
  {
    id: 24,
    path: "/register",
    component: Register,
  },
  {
    id: 25,
    path: "/login",
    component: Login,
  },
  {
    id: 25,
    path: "/browser-storage/local",
    component: LocalStorage,
  },
  {
    id: 26,
    path: "/browser-storage/session",
    component: SessionStorage,
  },
  {
    id: 27,
    path: "/browser-storage/hooks",
    component: BrowserStorageByHook,
  },
  {
    id: 28,
    path: "/persist-form",
    component: PersistForm,
  },
  {
    id: 29,
    path: "/profile",
    component: Profile,
  },
  {
    id: 29,
    path: "/update-profile",
    component: UpdateProfile,
  },
  {
    id: 30,
    path: "/product/:product_id",
    component: ProductDetail,
  },
  {
    id: 31,
    path: "/courses",
    component: Courses,
  },
  {
    id: 31,
    path: "/courses/:course_id",
    component: CourseDetail,
  },
  {
    id: 31,
    path: "/courses-list",
    component: CourseList,
  },
  {
    id: 32,
    path: "/slider",
    component: SliderComponent,
  },
  {
    id: 32,
    path: "/counters",
    component: Counters,
  },
];
