class ClientManager {
    private clients: Client[] = [];
  
    // demais implementações
  
    public calculateTotalIncome(): number {
      let total: number = 0;
      this.clients.forEach((client) => {
        total += client.calculateBill();
      });
      return total;
    }
  
      public deleteUser(registrationNumber: number): void {
      let registrationIndex = undefined;
  
      for (let i = 0; i < this.clients.length; i++) {
        if (this.clients[i].registrationNumber === registrationNumber) {
          registrationIndex = i;
        }
      }
  
      if (registrationIndex !== undefined) {
        this.clients.splice(registrationIndex, 1);
      }
    }
  }