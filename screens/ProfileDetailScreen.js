import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from 'react-native';
import { api } from '../api/client';
export default function ProfileDetailScreen({ route }) {
  const { id } = route.params;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get(`/profiles/${id}`);
      setProfile(res.data);
    } catch (err) {
      setError('Profil detayları yüklenemedi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.loading}>Profil yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <Pressable onPress={fetchProfile}>
          <Text style={styles.retry}>Tekrar Dene</Text>
        </Pressable>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Profil bulunamadı</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{profile.name}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>E-posta</Text>
          <Text>{profile.email}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Yaş</Text>
          <Text>{profile.age}</Text>
        </View>

        {profile.phone && (
          <View style={styles.section}>
            <Text style={styles.label}>Telefon</Text>
            <Text>{profile.phone}</Text>
          </View>
        )}

        {profile.bio && (
          <View style={styles.section}>
            <Text style={styles.label}>Biyografi</Text>
            <Text>{profile.bio}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loading: {
    marginTop: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  retry: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
