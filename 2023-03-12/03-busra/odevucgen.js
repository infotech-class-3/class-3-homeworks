class Ucgen {
        constructor(nokta1, nokta2, nokta3) {
          this.nokta1 = nokta1;
          this.nokta2 = nokta2;
          this.nokta3 = nokta3;
        }
        
        alan() {
          const kenar1 = this.nokta1.uzaklik(this.nokta2);
          const kenar2 = this.nokta2.uzaklik(this.nokta3);
          const kenar3 = this.nokta3.uzaklik(this.nokta1);
          const u = (kenar1 + kenar2 + kenar3) / 2;
          return Math.sqrt(u * (u - kenar1) * (u - kenar2) * (u - kenar3));
        }
      }
      
      class Nokta {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        
        uzaklik(nokta) {
          const dx = nokta.x - this.x;
          const dy = nokta.y - this.y;
          return Math.sqrt(dx*dx + dy*dy);
        }
      }
      

      const nokta1 = new Nokta(1, 0);
      const nokta2 = new Nokta(3, 0);
      const nokta3 = new Nokta(0, 9);
      const ucgen = new Ucgen(nokta1, nokta2, nokta3);
      console.log("Üçgenin alanı: " + ucgen.alan());
      
      
      
      
      
      