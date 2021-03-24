import React from "react";
import { GetStaticProps } from "next";

interface Dish {
    name: string;
}

interface Category {
    name: string;
    dishes: Dish[];
}

interface MenuProps {
    categories: Category[];
}

const Menu: React.FC<MenuProps> = ({ categories }) => (
    <div className="container">
        <div className="row">
        {categories.map(category => (
                <div className="col-sm-6 col-md-4">
                    <h2>{category.name}</h2>
                    <ul>
                    {category.dishes.map(dish => (
                        <li>{dish.name}</li>
                    ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default Menu;

export const getStaticProps: GetStaticProps<MenuProps> = async (context) => {
    const categories: Category[] = await (await fetch("http://localhost:1337/categories")).json();

    return {
        props: {
            categories
        }
    };
};
