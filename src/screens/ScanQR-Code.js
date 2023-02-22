import React, {useState} from 'react';
import {View, Text, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const ScanQRCode = () => {
    const [data, setData] = useState('')
    return (
        <QRCodeScanner
        onRead={({data}) => setData(data)}
        flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        topContent={
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'}}>
                    {data}
                </Text>
            </View>
        }
        bottomContent={
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                    }}>Scan the QR-Code to take attandance!
                </Text>
            </View>
        }
      />
    );
}

export default ScanQRCode;