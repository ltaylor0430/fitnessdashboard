import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import * as faUser from '@fortawesome/fontawesome-free-regular/faUser';
import * as faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import { Injectable} from '@angular/core';
@Injectable()
export class FontAwesomeService {
  constructor() {
    fontawesome.library.add(faUser);
    fontawesome.library.add(faTwitter);

  }
}
