import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CustomButton } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const reservedSeats = ['1-1', '2-3', '3-5', '3-6'];

const seatPrices = {
  1: 60,
  2: 60,
  3: 50,
  4: 40,
  5: 40,
};

const ReservationScreen = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  const toggleSeatSelection = (row, col) => {
    const seatId = `${row}-${col}`;
    if (reservedSeats.includes(seatId)) return;

    setSelectedSeats((prevSelectedSeats) => {
      let newSelectedSeats;
      if (prevSelectedSeats.includes(seatId)) {
        newSelectedSeats = prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        newSelectedSeats = [...prevSelectedSeats, seatId];
      }

      const newTotalPrice = newSelectedSeats.reduce((acc, seat) => {
        const [rowIndex] = seat.split('-');
        return acc + seatPrices[parseInt(rowIndex)];
      }, 0);

      setTotalPrice(newTotalPrice);
      return newSelectedSeats;
    });
  };

  const getSeatImage = (row, col) => {
    const seatId = `${row}-${col}`;
    if (reservedSeats.includes(seatId)) {
      return require('../../assets/cinemas/reserved.png');
    } else if (selectedSeats.includes(seatId)) {
      return require('../../assets/cinemas/chosed.png');
    } else {
      return require('../../assets/cinemas/seats.png');
    }
  };

  const renderSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    return (
      <TouchableOpacity
        key={seatId}
        style={styles.seat}
        onPress={() => toggleSeatSelection(row, col)}
        disabled={reservedSeats.includes(seatId)}
      >
        <Image style={styles.seatImage} source={getSeatImage(row, col)} />
      </TouchableOpacity>
    );
  };

  const renderSeats = () => {
    const seatLayout = [
      [4],
      [4],
      [6],
      [8],
      [8],
    ];

    const rowLabels = ['A', 'B', 'C', 'D', 'E'];

    return (
      <>
        {/* Kolon numaraları */}
        <View style={styles.columnNumbers}>
          <Text style={styles.emptyCorner} />

        </View>

        {/* Koltuklar + Satır etiketleri */}
        {seatLayout.map((rowSeats, rowIndex) => {
          const seatCount = rowSeats[0];
          return (
            <View key={`row-${rowIndex}`} style={styles.seatRow}>
              <Text style={styles.rowLabel}>{rowLabels[rowIndex]}</Text>
              <View style={styles.row}>
                {Array.from({ length: seatCount }).map((_, seatIndex) => (
                  renderSeat(rowIndex, seatIndex)
                ))}
              </View>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Image style={styles.semicircle} source={require('../../assets/cinemas/semicircle.png')} />
      </View>

      <View style={styles.seatsContainer}>{renderSeats()}</View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <Ionicons name="radio-button-on" color="#aa2525" />
          <Text> Rezerve</Text>
        </View>
        <View style={styles.legendItem}>
          <Ionicons name="radio-button-on" color="#b0b0b0" />
          <Text> Seçilebilir</Text>
        </View>
        <View style={styles.legendItem}>
          <Ionicons name="radio-button-on" color="#6b8e23" />
          <Text> Seçilen</Text>
        </View>
      </View>

      <View style={styles.totalPriceContainer}>
        <Ionicons name='cart' color='white' size={21} />
        <Text style={styles.totalPriceText}>Toplam Fiyat: {totalPrice} TL</Text>
      </View>

      <CustomButton
        buttonText="Bilet Al"
        setWidth="84"
        handleOnPress={() => {
          if (selectedSeats.length === 0) {
            alert('Lütfen en az bir koltuk seçin.');
          } else {
            navigation.navigate('Payment', {
              selectedSeats,
              totalPrice,
            });
          }
        }}
        buttonColor="#aa2525"
        pressedButtonColor="grey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
  },
  screenContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  semicircle: {
    height: 60,
    width: 199,
  },
  seatsContainer: {
    flexDirection: 'column',
    marginTop: 30,
  },
  columnNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 20,
  },
  columnNumber: {
    width: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  emptyCorner: {
    width: 40,
  },
  seatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowLabel: {
    width: 30,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', // <-- bu satır önemli

  },
  seat: {
    width: 40,
    height: 40,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatImage: {
    width: 40,
    height: 40,
  },
  legendContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  totalPriceContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: 13,
    color: '#fff',
    marginLeft: 6,
  },
});

export default ReservationScreen;
