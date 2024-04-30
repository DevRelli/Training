"""Threading adiciona novos caminhos para o seu programa executar"""

import threading
import time
import random

def print_names():
    for name in ('John', 'Enzo', 'Isa', 'Gari'):
        print(name)
        time.sleep(random.uniform(0.5, 1.5))
    
def print_age(min_sleep, max_sleep):
    for _ in range(5):
        print(random.randint(20, 50))
        time.sleep(random.uniform(min_sleep, max_sleep))

t1 = threading.Thread(target=print_names)
t2 = threading.Thread(target=print_age, args=(0.2, 1))

t1.start()
t2.start()

# Juntar Threads com a Main Thread - o join() bloqueia as threads para que elas possam ser finalizadas e ai sim serem passadas para Main Thread
t1.join()
t2.join()