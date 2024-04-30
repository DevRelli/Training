# Multiprocessing é uma ótima maneira para acelerar processos ligados a CPU (processamento de dados)

import multiprocessing

def square_sum(numbers):
    total = sum([num**2 for num in numbers])
    print(f"Sum squares from {numbers=}: {total}")
    
numbers = [10,20,30,40,50,60,70,80,90,100]

# Divindo lista em CHUNKS
chunk1 = numbers[:5]
chunk2 = numbers[5:]

process1 = multiprocessing.Process(target=square_sum, args=(chunk1, ))
process2 = multiprocessing.Process(target=square_sum, args=(chunk2, ))

process1.start()
process2.start()

process1.join()
process2.join()
