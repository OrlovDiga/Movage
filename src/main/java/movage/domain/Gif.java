package movage.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Gif {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String pathGif;
}
