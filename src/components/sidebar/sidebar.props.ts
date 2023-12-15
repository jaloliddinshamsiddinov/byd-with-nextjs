import { CategoryType } from "@/interface/categories.interface";
import { BlogsType } from "@/interface/interface";

export interface SidebarProps {
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
