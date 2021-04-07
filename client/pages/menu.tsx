import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <Container>
        <Row>
            {categories.map(category => (
                <Col sm={6} md={4} lg={3}>
                    <h2>{category.name}</h2>
                    <ul>
                        {category.dishes.map(dish => (
                            <li>{dish.name}</li>
                        ))}
                    </ul>
                </Col>
            ))}
        </Row>
    </Container>
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
