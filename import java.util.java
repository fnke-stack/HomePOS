import java.util.ArrayList;
import java.util.List;

class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}

class Order {
    private List<Product> products;

    public Order() {
        products = new ArrayList<>();
    }

    public void addProduct(Product product) {
        products.add(product);
    }

    public double getTotal() {
        double total = 0;
        for (Product product : products) {
            total += product.getPrice();
        }
        return total;
    }
}

public class Main {
    public static void main(String[] args) {
        // Create some products
        Product apple = new Product("Apple", 1.0);
        Product banana = new Product("Banana", 0.5);

        // Create an order and add products
        Order order = new Order();
        order.addProduct(apple);
        order.addProduct(banana);

        // Print the total cost of the order
        System.out.println("Total cost: " + order.getTotal());
    }
}