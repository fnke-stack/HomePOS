import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems;

    // Getters and setters

    public double getTotal() {
        double total = 0;
        for (OrderItem orderItem : orderItems) {
            total += orderItem.getProduct().getPrice() * orderItem.getQuantity();
        }
        return total;
    }
}