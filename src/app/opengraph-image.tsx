import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { personal } from '@/data/personal';

export const runtime = 'nodejs';
export const alt = `${personal.name} — ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const avatarPath = join(process.cwd(), 'public', 'profile-avatar.jpg');
  const avatarData = await readFile(avatarPath);
  const avatarSrc = `data:image/jpeg;base64,${avatarData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b0b0d 0%, #0a0a0c 55%, #14101c 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient purple glow accents */}
        <div
          style={{
            position: 'absolute',
            top: -140,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.25)',
            filter: 'blur(10px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            left: 120,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.12)',
            filter: 'blur(10px)',
          }}
        />

        {/* Avatar */}
        <div
          style={{
            display: 'flex',
            flexShrink: 0,
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: '4px solid rgba(255,255,255,0.18)',
            boxShadow: '0 0 0 14px rgba(139,92,246,0.08)',
            overflow: 'hidden',
            marginRight: 64,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            width={300}
            height={300}
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>

        {/* Text block */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#c4b5fd',
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            {personal.title} · MBA (Marketing)
          </div>

          <div
            style={{
              display: 'flex',
              color: '#f5f5f7',
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            {personal.name}
          </div>

          <div
            style={{
              display: 'flex',
              color: '#a1a1aa',
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: 32,
            }}
          >
            {personal.headline}
          </div>

          <div style={{ display: 'flex', gap: 14 }}>
            {['Product Strategy', 'Analytics & AI', 'Business Growth'].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#d4d4d8',
                  padding: '10px 20px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
