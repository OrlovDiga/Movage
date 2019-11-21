package movage.data;

import movage.domain.Gif;
import org.springframework.data.repository.CrudRepository;

public interface GifRepo extends CrudRepository<Gif, Long> {
    long findTopByOrderByIdDesc();

}
